<?php
//登录数据库
include './conn.php';
$user = $_POST['user'];
$pw = $_POST['pw'];
$pw = md5($pw);

$resp = array("result"=>false);
header("content-type:text/json");

$sql = "SELECT `password` FROM `user` WHERE `username`='" . $user . "'";
$ret = mysqli_query($conn, $sql);

if($ret->num_rows > 0){
		while($row = $ret->fetch_assoc()) {
			if($row['password']===$pw){				
				$resp['result']=true;
				
				echo json_encode($resp);
			}else{				
				echo json_encode($resp);
			}
		}
}else{
	echo json_encode($resp);
}
?>