<?php
namespace site\fe\matter\plan;

include_once dirname(__FILE__) . '/base.php';
/**
 * 计划活动
 */
class main extends base {
	/**
	 *
	 */
	public function get_action($app) {
		$modelApp = $this->model('matter\plan');

		$oApp = $modelApp->byId($app, ['fields' => 'id,state,siteid,mission_id,title,summary,pic,check_schemas,jump_delayed']);
		if (false === $oApp || $oApp->state !== '1') {
			return new \ObjectNotFoundError();
		}
		$modelSchTsk = $this->model('matter\plan\schema\task');
		$tasks = $modelSchTsk->byApp($oApp->id, ['fields' => 'id,task_seq,title,jump_delayed,auto_verify,can_patch,as_placeholder,born_mode']);
		$oApp->tasks = $tasks;

		/* 是否支持邀请 */
		$modelInv = $this->model('invite');
		$oInvitee = new \stdClass;
		$oInvitee->id = $oApp->siteid;
		$oInvitee->type = 'S';
		$oInvite = $modelInv->byMatter($oApp, $oInvitee, ['fields' => 'id,state,can_relay,code,expire_at']);
		if ($oInvite && $oInvite->state === '1') {
			$oApp->entryUrl = $modelInv->getEntryUrl($oInvite);
			$oApp->invite = $oInvite;
		}

		$result = new \stdClass;
		$result->app = $oApp;
		$result->user = $this->who;

		return new \ResponseData($result);
	}
	/**
	 * 当前用户的概况
	 */
	public function overview_action($app) {
		$modelApp = $this->model('matter\plan');
		$app = $modelApp->escape($app);

		$oApp = $modelApp->byId($app, ['fields' => 'id,state,jump_delayed']);
		if (false === $oApp || $oApp->state !== '1') {
			return new \ObjectNotFoundError();
		}

		$oOverview = new \stdClass;

		$modelUsr = $this->model('matter\plan\user');
		$oAppUsr = $modelUsr->byUser($oApp, $this->who, ['fields' => 'nickname,group_id,start_at,last_enroll_at,task_num,score,coin']);
		if (!empty($oAppUsr->group_id)) {
			$modelGrpTeam = $this->model('matter\group\team');
			$oGroupRnd = $modelGrpTeam->byId($oAppUsr->group_id, ['fields' => 'title']);
			if ($oGroupRnd) {
				$oAppUsr->group_title = $oGroupRnd->title;
			}
		}

		$oOverview->user = $oAppUsr;

		$modelUsrTsk = $this->model('matter\plan\task');
		$oLastUserTask = $modelUsrTsk->lastByApp($this->who, $oApp, ['fields' => 'id,task_schema_id,verified,born_at']);
		if ($oLastUserTask) {
			$modelSchTsk = $this->model('matter\plan\schema\task');
			$oLastUserTask->task_schema = $modelSchTsk->byId($oLastUserTask->task_schema_id, ['fields' => 'id,task_seq,title,jump_delayed,auto_verify,can_patch,as_placeholder']);
		}
		$oOverview->lastUserTask = $oLastUserTask;

		$oOverview->nowTaskSchema = $modelUsrTsk->nowSchemaByApp($this->who, $oApp);

		return new \ResponseData($oOverview);
	}
	/**
	 *
	 */
	public function nowTask_action($app) {
		$app = $this->escape($app);
		$modelApp = $this->model('matter\plan');

		$oApp = $modelApp->byId($app, ['fields' => 'id,state,siteid,mission_id,title,summary,pic,check_schemas,jump_delayed']);
		if (false === $oApp || $oApp->state !== '1') {
			return new \ObjectNotFoundError();
		}

		$modelUsrTsk = $this->model('matter\plan\task');
		$oNowTaskSchema = $modelUsrTsk->nowSchemaByApp($this->who, $oApp);

		return new \ResponseData($oNowTaskSchema);
	}
	/**
	 * 进行用户端的活动设置
	 */
	public function config_action($app) {
		$app = $this->escape($app);
		$modelApp = $this->model('matter\plan');

		$oApp = $modelApp->byId($app, ['fields' => 'id,state,siteid,mission_id,title,summary,pic,check_schemas,jump_delayed']);
		if (false === $oApp || $oApp->state !== '1') {
			return new \ObjectNotFoundError();
		}

		$oUser = $this->who;
		$modelUsr = $this->model('matter\plan\user');
		$oAppUser = $modelUsr->byUser($oApp, $oUser);
		if (false === $oAppUser) {
			$oAppUser = $modelUsr->createOrUpdate($oApp, $oUser);
		}

		$updateCount = 0;
		$oPosted = $this->getPostJson();
		if (isset($oPosted)) {
			foreach ($oPosted as $prop => $val) {
				switch ($prop) {
				case 'start_at':
					$updateCount++;
					$modelUsr->update('xxt_plan_user', ['start_at' => $val], ['id' => $oAppUser->id]);
					break;
				}
			}
		}

		return new \ResponseData($updateCount);
	}
}