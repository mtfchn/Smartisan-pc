<?php
	include './conn.php';
	$cartid = $_GET['cartid'];
	
	
	$resp = array("result"=>false);
	header("content-type:text/json");


	$sql = "DELETE FROM `cart` WHERE id ='$cartid'";
	$ret = mysqli_query($conn, $sql);
	if($ret){
		$resp['result'] = true;
		echo json_encode($resp);
	}else{
		echo json_encode($resp);
	}
?>