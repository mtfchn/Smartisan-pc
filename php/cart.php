<?php
	$username = $_GET['user'];
	include './conn.php';
	// $cart = array(
	// 	array('name'=>'大宝剑', 'price'=>'35', 'count'=>1, 'size'=>'xxl'),
	// 	array('name'=>'中宝剑', 'price'=>'30', 'count'=>1, 'size'=>'xl'),
	// 	array('name'=>'小宝剑', 'price'=>'25', 'count'=>1, 'size'=>'l'),
	// 	array('name'=>'迷你宝剑', 'price'=>'20', 'count'=>1, 'size'=>'m'),
	// 	array('name'=>'超大宝剑', 'price'=>'40', 'count'=>1, 'size'=>'xxxl')
	// );
	$cart = array();
	//查询数据库，取得数据>>>>>>>>>>>>>

	
	mysqli_query($conn, 'set names utf8');

	//1.取到userid
	$sql = "SELECT `id` FROM `user` WHERE `username`='$username'";
	$result = mysqli_query($conn, $sql);

	if($result->num_rows > 0) {
		$row = $result->fetch_assoc();
		$userid = $row['id'];

		$sql = "SELECT  `product`.src,`product`.name, `product`.price,`cart`.count,`cart`.id
				FROM `cart` LEFT JOIN `product`
				ON `cart`.productid = `product`.id
				WHERE `cart`.userid = $userid
				";
		$result = mysqli_query($conn, $sql);
		if($result->num_rows > 0) {
			while ($row = $result->fetch_assoc()) {
				$cart[] = $row;
			}
		}
	} else {
		die('用户id不存在');
	}
	//查询数据库，取得数据<<<<<<<<<<<<<

	header('content-type: text/json');
	// header('access-control-allow-origin: *');
	echo json_encode($cart);

?>