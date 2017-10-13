<?php
namespace matter\mission;
/**
 * 项目下的素材
 */
class matter_model extends \TMS_MODEL {
	/**
	 * 获得项目下已有素材的数量
	 */
	public function count($missionId, $options = array()) {
		$q = [
			'count(*)',
			'xxt_mission_matter',
			"mission_id='$missionId'",
		];
		$count = (int) $this->query_val_ss($q);

		return $count;
	}
	/**
	 * 获得项目下的所有素材
	 *
	 * @param int $missionId
	 * @param mixed $matterType string/array
	 * @param array $options
	 *
	 */
	public function &byMission($missionId, $matterType = null, $aOptions = [], $verbose = 'Y') {
		$fields = isset($aOptions['fields']) ? $aOptions['fields'] : 'id,matter_id,matter_title,matter_type,is_public,seq,create_at,start_at,end_at,scenario,phase_id';

		$q = [
			$fields,
			'xxt_mission_matter',
			["mission_id" => $missionId],
		];

		/* 按类型过滤 */
		!empty($matterType) && $q[2]['matter_type'] = $matterType;
		/* 按可见性过滤 */
		if (isset($aOptions['is_public']) && $aOptions['is_public'] === 'Y') {
			$q[2]['is_public'] = 'Y';
		}
		/* 按名称过滤 */
		if (!empty($aOptions['byTitle'])) {
			$q[2]["matter_title"] = (object) ['op' => 'like', 'pat' => '%' . $aOptions['byTitle'] . '%'];
		}
		/* 按开始结束时间过滤 */
		if (!empty($aOptions['byTime'])) {
			switch ($aOptions['byTime']) {
			case 'running':
				$q[2]["start_at"] = (object) ['op' => 'between', 'pat' => [1, time()]];
				$q[2]["end_at"] = (object) ['op' => 'not between', 'pat' => [1, time()]];
				break;
			case 'pending':
				$q[2]["start_at"] = (object) ['op' => '>', 'pat' => time()];
				break;
			case 'over':
				$q[2]["end_at"] = (object) ['op' => 'between', 'pat' => [1, time()]];
				break;
			}
		}
		/* 按场景过滤 */
		if (!empty($aOptions['byScenario'])) {
			$q[2]['scenario'] = $aOptions['byScenario'];
		}
		/* 按项目阶段过滤 */
		if (!empty($aOptions['byPhase'])) {
			$q[2]['phase_id'] = $aOptions['byPhase'];
		}
		/* 按是用户是否可见过滤 */
		if (!empty($aOptions['is_public'])) {
			$q[2]['is_public'] = $aOptions['is_public'];
		}

		$q2 = ['o' => 'create_at desc'];
		$mms = $this->query_objs_ss($q, $q2);

		if ($verbose === 'Y' && count($mms)) {
			$matters = [];
			$modelByType = new \stdClass;
			foreach ($mms as &$mm) {
				if (isset($modelByType->{$mm->matter_type})) {
					$modelMat = $modelByType->{$mm->matter_type};
				} else {
					$modelMat = $this->model('matter\\' . $mm->matter_type);
				}
				if (in_array($mm->matter_type, ['enroll', 'signin', 'group'])) {
					$fields = 'siteid,id,title,summary,pic,create_at,creater_name,data_schemas,op_short_url_code,start_at,end_at';
					if (in_array($mm->matter_type, ['enroll'])) {
						$fields .= ',end_submit_at,rp_short_url_code,can_coin,entry_rule';
					}
					if (in_array($mm->matter_type, ['enroll', 'group'])) {
						$fields .= ',scenario';
					}
					//
					$options2 = ['fields' => $fields, 'cascaded' => 'N'];
				} else if (in_array($mm->matter_type, ['wall'])) {
					$fields = 'siteid,id,title,summary,pic,create_at,creater_name,start_at,end_at';
					$options2 = ['fields' => $fields];
				} else if ($mm->matter_type === 'memberschema') {
					$fields = 'siteid,id,title,create_at,start_at,end_at,url';
					$options2 = ['fields' => $fields, 'cascaded' => 'N'];
				} else {
					$fields = 'siteid,id,title,summary,pic,create_at,creater_name';
					$options2 = ['fields' => $fields, 'cascaded' => 'N'];
				}

				if ($oMatter = $modelMat->byId($mm->matter_id, $options2)) {
					/* 是否开放了运营者链接 */
					if (isset($aOptions['op_short_url_code']) && $aOptions['op_short_url_code'] === true && empty($oMatter->op_short_url_code)) {
						continue;
					}
					$oMatter->_pk = $mm->id;
					$oMatter->is_public = $mm->is_public;
					$oMatter->seq = $mm->seq;
					if ($mm->matter_type === 'signin') {
						if (!isset($modelSigRnd)) {
							$modelSigRnd = $this->model('matter\signin\round');
						}
						$oMatter->rounds = $modelSigRnd->byApp($oMatter->id);
					}
					if (in_array($mm->matter_type, ['enroll', 'signin'])) {
						$oMatter->opData = $modelMat->opData($oMatter, true);
					}
					if ($mm->matter_type === 'memberschema') {
						$oMatter->entryUrl = $modelMat->getEntryUrl($oMatter->siteid, $oMatter->id);
					}

					$matters[] = $oMatter;
				}
			}

			return $matters;
		}

		return $mms;
	}
}