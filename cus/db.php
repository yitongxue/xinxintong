<?php
if (defined('SAE_MYSQL_HOST_M')) {
	define('TMS_MYSQL_HOST', SAE_MYSQL_HOST_M);
	define('TMS_MYSQL_PORT', SAE_MYSQL_PORT);
	define('TMS_MYSQL_USER', SAE_MYSQL_USER);
	define('TMS_MYSQL_PASS', SAE_MYSQL_PASS);
	define('TMS_MYSQL_DB', SAE_MYSQL_DB);
} else {
	define('TMS_MYSQL_HOST', 'localhost');
	define('TMS_MYSQL_PORT', '3306');
	define('TMS_MYSQL_USER', 'root');
	define('TMS_MYSQL_PASS', '');
	define('TMS_MYSQL_DB', 'ytx');
}