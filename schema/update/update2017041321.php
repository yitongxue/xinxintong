<?php
require_once '../../db.php';

$sqls = array();
//
$sqls[] = "ALTER TABLE  `xxt_enroll_record` CHANGE  `score`  `score` TEXT NULL COMMENT  'quiz打分记录'";

foreach ($sqls as $sql) {
	if (!$mysqli->query($sql)) {
		header('HTTP/1.0 500 Internal Server Error');
		echo 'database error: ' . $mysqli->error;
	}
}

echo "end update " . __FILE__ . PHP_EOL;