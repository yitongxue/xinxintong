<?php
namespace matter\enroll;

require_once dirname(dirname(__FILE__)) . '/round_base.php';

class round_model extends \TMS_MODEL {
	use \matter\Round;
	/**
	 *
	 */
	public function byId($roundId, $options = []) {
		$fields = isset($options['fields']) ? $options['fields'] : '*';
		$q = [
			$fields,
			'xxt_enroll_round',
			['rid' => $roundId],
		];
		$round = $this->query_obj_ss($q);

		return $round;
	}
	/**
	 * 返回登记活动下的轮次
	 *
	 * @param object $oApp
	 *
	 */
	public function &byApp($oApp, $options = []) {
		$fields = isset($options['fields']) ? $options['fields'] : '*';
		$state = isset($options['state']) ? $options['state'] : false;
		$page = isset($options['page']) ? $options['page'] : null;

		$oResult = new \stdClass; // 返回的结果

		$oResult->active = $this->getActive($oApp, ['fields' => $fields]);

		$q = [
			$fields,
			'xxt_enroll_round',
			['aid' => $oApp->id],
		];
		$state && $q[2]['state'] = $state;
		$q2 = ['o' => 'create_at desc'];
		!empty($page) && $q2['r'] = ['o' => ($page->num - 1) * $page->size, 'l' => $page->size];
		$oResult->rounds = $this->query_objs_ss($q, $q2);

		if (!empty($page)) {
			$q[0] = 'count(*)';
			$oResult->total = $this->query_val_ss($q);
		}

		return $oResult;
	}
	/**
	 * 添加轮次
	 *
	 * @param object $oApp
	 * @param object $props
	 * @param object $oCreator
	 */
	public function create($oApp, $oProps, $oCreator = null) {
		// 结束数据库读写分离带来的问题
		$this->setOnlyWriteDbConn(true);

		/* 只允许有一个指定启动轮次 */
		if (isset($oProps->state) && (int) $oProps->state === 1 && isset($oProps->start_at) && (int) $oProps->start_at === 0) {
			if ($lastRound = $this->getAssignedActive($oApp)) {
				return [false, '请先停止轮次【' . $lastRound->title . '】'];
			}
		}
		$roundId = uniqid();
		$round = [
			'siteid' => $oApp->siteid,
			'aid' => $oApp->id,
			'rid' => $roundId,
			'creator' => isset($oCreator->id) ? $oCreator->id : '',
			'create_at' => time(),
			'title' => empty($oProps->title) ? '' : $this->escape($oProps->title),
			'state' => isset($oProps->state) ? $oProps->state : 0,
			'start_at' => empty($oProps->start_at) ? 0 : $oProps->start_at,
			'end_at' => empty($oProps->end_at) ? 0 : $oProps->end_at,
		];
		$this->insert('xxt_enroll_round', $round, false);

		if (empty($oApp->multi_rounds) || $oApp->multi_rounds !== 'Y') {
			$this->update(
				'xxt_enroll',
				['multi_rounds' => 'Y'],
				['id' => $oApp->id]
			);
		}

		$round = $this->byId($roundId);

		return [true, $round];
	}
	/**
	 * 获得指定登记活动的当前轮次
	 *
	 * @param object $oApp
	 *
	 */
	public function getAssignedActive($oApp, $options = []) {
		$fields = isset($options['fields']) ? $options['fields'] : '*';

		$q = [
			$fields,
			'xxt_enroll_round',
			['aid' => $oApp->id, 'start_at' => 0, 'end_at' => 0, 'state' => 1],
		];
		$round = $this->query_obj_ss($q);

		return $round;
	}
	/**
	 * 获得指定登记活动中启用状态的轮次
	 *
	 * 没有指定开始和结束时间，且状态为启用状态的轮次优先
	 * 如果登记活动设置了轮次定时生成规则，需要检查是否需要自动生成轮次
	 *
	 * @param object $app
	 *
	 */
	public function getActive($oApp, $aOptions = []) {
		$fields = isset($aOptions['fields']) ? $aOptions['fields'] : '*';

		if ($oRound = $this->getAssignedActive($oApp, $aOptions)) {
			return $oRound;
		}

		if (!empty($oApp->roundCron)) {
			/* 有效的定时规则 */
			$enabledRules = [];
			foreach ($oApp->roundCron as $rule) {
				if (isset($rule->enabled) && $rule->enabled === 'Y') {
					$enabledRules[] = $rule;
				}
			}
		}
		if (empty($enabledRules)) {
			/* 根据轮次开始时间获得轮次 */
			$current = time();
			$q = [
				$fields,
				'xxt_enroll_round',
				"aid='{$oApp->id}' and state=1 and start_at<={$current}",
			];
			$q2 = [
				'o' => 'start_at desc',
				'r' => ['o' => 0, 'l' => 1],
			];
			$rounds = $this->query_objs_ss($q, $q2);
			$oRound = count($rounds) === 1 ? $rounds[0] : false;
		} else {
			/* 根据定时规则获得轮次 */
			$rst = $this->_getRoundByCron($oApp, $enabledRules, $aOptions);
			if (false === $rst[0]) {
				return false;
			}
			$oRound = $rst[1];
		}

		return $oRound;
	}
	/**
	 * 根据定时规则生成轮次
	 *
	 * @param array $rules 定时生成轮次规则
	 *
	 */
	private function _getRoundByCron($oApp, $rules, $aOptions) {
		if (false === ($oCronRound = $this->_lastRoundByCron($rules))) {
			return [false, '无法生成定时轮次'];
		}

		$oRound = false; // 和定时计划匹配的论次

		/* 检查已经存在的轮次是否满足定时规则 */
		$fields = isset($aOptions['fields']) ? $aOptions['fields'] : '*';
		$q = [
			$fields,
			'xxt_enroll_round',
			['aid' => $oApp->id, 'state' => 1, 'start_at' => $oCronRound->start_at],
		];
		if ($oRound = $this->query_obj_ss($q)) {
			return [true, $oRound];
		}
		/* 创建新论次 */
		if (false === $oRound) {
			$rst = $this->create($oApp, $oCronRound);
			if (false === $rst[0]) {
				return $rst;
			}
			$oRound = $rst[1];
		}

		return [true, $oRound];
	}

}