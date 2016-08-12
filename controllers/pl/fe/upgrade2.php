<?php
namespace pl\fe;

class upgrade2 extends \TMS_CONTROLLER {
	/**
	 *
	 */
	public function get_access_rule() {
		$rule_action['rule_type'] = 'white';
		$rule_action['actions'][] = 'do';

		return $rule_action;
	}
	/**
	 * 当前用户可见的所有公众号
	 */
	public function do_action($site = null, $app = null, $ek = null, $force = 'N') {
		$model = $this->model();

		$q = ['a', 'tmp_stat', '1=1'];
		$records = $model->query_objs_ss($q);
		foreach ($records as $record) {
			$sql = "aid='57a48aec7f546' and state=1";
			$sql .= " and data like '%\"c1470401942360\":\"" . $record->a . "\"%'";
			$sql .= " and data like '%\"phase\":\"57a48917ae900\"%'";
			$cnt = $model->query_val_ss(['count(*)', 'xxt_signin_record', $sql]);
			$model->update('tmp_stat', ['c' => $cnd]);

			$sql = "aid='57a48aec7f546' and state=1";
			$sql .= " and data like '%\"c1470401942360\":\"" . $record->a . "\"%'";
			$sql .= " and data like '%\"phase\":\"57a489181db09\"%'";
			$cnt = $model->query_val_ss(['count(*)', 'xxt_signin_record', $sql]);
			$model->update('tmp_stat', ['d' => $cnd]);

			$sql = "aid='57a48aec7f546' and state=1";
			$sql .= " and data like '%\"c1470401942360\":\"" . $record->a . "\"%'";
			$sql .= " and data like '%\"phase\":\"57a489188065e\"%'";
			$cnt = $model->query_val_ss(['count(*)'] 'xxt_signin_record', $sql]);
			$model->update('tmp_stat', ['e' => $cnd]);

			$sql = "aid='57a48aec7f546' and state=1";
			$sql .= " and data like '%\"c1470401942360\":\"" . $record->a . "\"%'";
			$sql .= " and data like '%\"phase\":\"57a48918e4ade\"%'";
			$cnt = $model->query_val_ss(['count(*)', 'xxt_signin_record', $sql]);
			$model->update('tmp_stat', ['f' => $cnd]);

			$sql = "aid='57a48aec7f546' and state=1";
			$sql .= " and data like '%\"c1470401942360\":\"" . $record->a . "\"%'";
			$sql .= " and data like '%\"phase\":\"57a4891954e4c\"%'";
			$cnt = $model->query_val_ss(['count(*)', 'xxt_signin_record', $sql]);
			$model->update('tmp_stat', ['g' => $cnd]);

			$sql = "aid='57a48aec7f546' and state=1";
			$sql .= " and data like '%\"c1470401942360\":\"" . $record->a . "\"%'";
			$sql .= " and data like '%\"phase\":\"57a48919b4bb9\"%'";
			$cnt = $model->query_val_ss(['count(*)', 'xxt_signin_record', $sql]);
			$model->update('tmp_stat', ['h' => $cnd]);

		}

		return new \ResponseData('ok');
	}
}