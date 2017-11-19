<?php
//连接数据库
$sever_name = 'localhost';
$dbms_name = 'root';
$dbms_password = '';
$db_name = 'Smartisan';

$conn = new mysqli($sever_name, $dbms_name, $dbms_password, $db_name);
if ($conn -> connect_error) {
	die('数据库连接错误');
}
?>