<?php
//注册
include './conn.php';
$user = $_POST['user'];
$pw = $_POST['pw'];
$pw = md5($pw);

//$sever_name = 'localhost';
//$dbms_name = 'root';
//$dbms_password = '';
//$db_name = 'Smartisan';
//
//$conn = new mysqli($sever_name, $dbms_name, $dbms_password, $db_name);
//if ($conn -> connect_error) {
//	die('数据库连接错误');
//}
$resp = array("result" => false, "reason" => "");
header("content-type:text/json");
//
//$sql = "SELECT `password` FROM `user` WHERE `username`='" . $user . "'";
//$ret = mysqli_query($conn, $sql);
//if($ret->num_rows>0){
//	$resp['reason'] = '用户名已存在';
//	echo json_encode($resp);
//	return; 
//}

$sql = "INSERT INTO `user` (`id`,`username`,`password`) VALUES (NULL,'$user','$pw')";
$ret = mysqli_query($conn, $sql);
if($ret){
	$resp['result']=true;
	echo json_encode($resp);
}else{
	$resp['reason']="注册失败";
	echo json_encode($resp);
}
?>