<?php
	include './conn.php';
	$name = $_GET['name'];
	$username = $_GET['username'];
	
	
	$resp = array("result"=>false);
	header("content-type:text/json");
	mysqli_query($conn, 'set names utf8');

	$sql = "SELECT `id` FROM `product` WHERE `name`='" . $name . "'";
	$ret = mysqli_query($conn, $sql);
	if($ret->num_rows > 0){
		while($row = $ret->fetch_assoc()) {
			$productid = $row['id'];
		}
	}
	
	
	$sql = "SELECT `id` FROM `user` WHERE `username`='" . $username ."'";
	$ret = mysqli_query($conn, $sql);
	if($ret->num_rows > 0){
		while($row = $ret->fetch_assoc()) {
			$userid = $row['id'];
		}
		
	}
	
//	if($ret->num_rows>0 && $result->num_rows>0){
		$sql = "INSERT INTO 
		`cart`(`id`, `userid`, `productid`, `count`) 
		VALUES 
		(null,'$userid','$productid',1)";
		$rets = mysqli_query($conn, $sql);
		if($rets){
			$resp['result'] = true;
			echo json_encode($resp);
		}else{
			echo json_encode($resp);
		}
//	}
	
?>