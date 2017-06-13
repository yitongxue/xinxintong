<?php
require_once '../../db.php';

/*
 * 登记活动相关数据类型迁移
 */
$tables = array('xxt_enroll', 'xxt_group', 'xxt_signin', 'xxt_wall', 'xxt_enroll_page', 'xxt_signin_page', 'xxt_template_enroll');

foreach ($tables as $table) {
	try {
		$sql = "select id,data_schemas from " . $table;

		$result = $mysqli->query($sql);

		while ($row = $result->fetch_object()) {
			if (!empty($row->data_schemas)) {
				$newDataSchemas = str_replace(
					['style="', 'style=\"', ';"', ';\"', "\n", '\n', "\r", '\r'],
					['style=\\\\"', 'style=\\\\"', ';\\\\"', ';\\\\"', "\\\\n", "\\\\n", "\\\\r", "\\\\r"],
					$row->data_schemas);
				if ($newDataSchemas !== $row->data_schemas) {
					$mysqli->query("update $table set data_schemas='" . $newDataSchemas . "' where id='$row->id'");
				}
			}
		}
	} catch (Exception $e) {
		header('HTTP/1.0 500 Internal Server Error');
		echo $e->getMessage() . '<br/> database error: ' . $mysqli->error;
	}
}

echo "end update " . __FILE__ . PHP_EOL;
