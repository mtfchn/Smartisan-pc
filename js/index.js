//轮播图
banner();

function banner() {

	var x1 = document.getElementsByClassName("lunbo")[0].offsetLeft;
	var y1 = document.getElementsByClassName("lunbo")[0].offsetTop;
	var x2;
	var index = 0;
	var timer;

	//		window.onload = function() {
	timer = setInterval(auto, 2000);
	//		}

	function auto() {
		index++;
		var q = index % 3
		if(q == 0) {
			$(".lunbo1").fadeIn();
			$(".lunbo2").fadeOut();
			$(".lunbo3").fadeOut();
		} else if(q == 1) {
			$(".lunbo3").fadeOut();
			$(".lunbo2").fadeIn();
			$(".lunbo1").fadeOut();
		} else {
			$(".lunbo3").fadeIn();
			$(".lunbo1").fadeOut();
			$(".lunbo2").fadeOut();
		}

	}
	$(".lunbo .page .yuanchange3").click(function() {
		console.log('a3');
		$(".lunbo3").fadeIn();
		$(".lunbo1").fadeOut();
		$(".lunbo2").fadeOut();
	});
	$(".lunbo .page .yuanchange2").click(function() {
		console.log('a2');
		$(".lunbo2").fadeIn();
		$(".lunbo1").fadeOut();
		$(".lunbo3").fadeOut();
	});
	$(".lunbo .page .yuanchange1").click(function() {
		console.log('a1');
		$(".lunbo1").fadeIn();
		$(".lunbo2").fadeOut();
		$(".lunbo3").fadeOut();

	})

	function show() {
		$(".tu1").attr("src", imgarr[index][0])
		$(".tu2").attr("src", imgarr[index][1])
		$(".tu3").attr("src", imgarr[index][2])
	}

	$(".lunbo").mousemove(function(e) {
		check(e);
		clearInterval(timer)

	})
	$(".lunbo").mouseleave(function() {
		clearInterval(timer);
		timer = setInterval(auto, 2000);
	})

	function check(e) {

		var a = e ? e : window.event;
		x2 = e.offsetLeft - x1;
		y2 = e.clientY - y1;
		var LorR = x2 - 610;
		var RorL = y2 - 250;
		var x3 = x1 + 610 - e.clientX;
		var y3 = y1 + 250 - e.clientY;
		if(LorR >= 0) {
			if(RorL >= 0) {
				$(".erji").css("left", -(-x3 / 1220 * 10) + "px");
				$(".beijing").css("transform", "perspective(3000px)rotateX(" + y2 / 500 * 8 + "deg)rotateY(" + -(-x2 / 1220 * 8) + "deg)");
				$(".phone").css("transform", "perspective(3000px)rotateX(" + y2 / 500 * 8 + "deg)rotateY(" + -(-x2 / 1220 * 9) + "deg)");
				$(".erji").css("transform", "perspective(3000px)rotateX(" + y2 / 500 * 8 + "deg)rotateY(" + -(-x2 / 1220 * 8) + "deg)");
			}

		} else {

			$(".erji").css("left", -(x3 / 1220 * 10) + "px");
			$(".beijing").css("transform", "perspective(3000px)rotateX(" + (y3 / 500 * 8) + "deg)rotateY(" + -x3 / 1220 * 8 + "deg)")
			$(".phone").css("transform", "perspective(3000px)rotateX(" + (y3 / 500 * 8) + "deg)rotateY(" + -x3 / 1220 * 9 + "deg)")
			$(".erji").css("transform", "perspective(3000px)rotateX(" + (y3 / 500 * 8) + "deg)rotateY(" + -x3 / 1220 * 8 + "deg)");

		}

	}
}
setTimeout(function(){
	loginMsg();
},100)


function loginMsg() {
	$('#header #loginMsg .item1').html(localStorage.getItem("username"));
	//	if(localStorage.getItem("username")){
	//		$('#header #loginMsg').css({
	//				visibility:'hidden'
	//			})
	//		$('#header .right .preson a').hover(function(){
	//			$('#header #loginMsg').css({
	//				visibility:'visible'
	//			})
	//		})
	//	}
	
	$('#header #loginMsg .item2').click(function() {
		localStorage.clear();
		location.reload();
	})
	
	
	
}

//加入到购物车

addToCart();

function addToCart() {
	$('dl #mask .s2').click(function() {
		//		console.log($(this).parent().parent().children('dt').children('span').html())
		//		console.log($(this).parent().parent().children('dd').children('.p1').html())
		//		console.log($(this).parent().parent().children('dd').children('.p2').html())
		//		console.log($(this).parent().parent().children('dd').children('.p4').html())
		$.ajax({
			type: "get",
			url: "./php/cart_add.php",
			data: {
				name: $(this).parent().parent().children('dd').children('.p1').html(),
				username: localStorage.getItem("username"),
			},
			success: function(resp) {
				if(resp.result) {
					alert('添加成功')
				} else {
					alert('添加失败')
				}
			},
			error: function() {

			}
		});
	})
}