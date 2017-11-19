<?php
//在数据库中筛选
include './conn.php';
$user = $_POST['user'];
$pw = $_POST['pw'];
$pw = md5($pw);
$resp = array("result" => false, "reason" => "");
header("content-type:text/json");

$sql = "SELECT `password` FROM `user` WHERE `username`='" . $user . "'";
$ret = mysqli_query($conn, $sql);
if($ret->num_rows>0){
	$resp['reason'] = '用户名已存在';
	echo json_encode($resp);
	return; 
}else{
	$resp['reason'] = '用户名不存在';
	$resp['result'] = true;
	echo json_encode($resp);
	return;
}
?>