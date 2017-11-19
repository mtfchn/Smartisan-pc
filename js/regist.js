regist();

function regist() {

	$('#regist .box .center .resert').click(function() {
		$.ajax({
			type: "post",
			url: "../php/regist.php",
			data: {
				user: $('#regist .box .center #user').val(),
				pw: $('#regist .box .center #pw').val()
			},
			success: function(resp) {
				if(resp.result) {
					alert("注册成功");
					location.href = "./login.html";
				} else {

				}
			},
			error: function(error) {

			}
		});
	})
	//光标离开时动态查询用户名是否存在
	$('#regist .box .center #user').blur(function() {
		$.ajax({
			type: "post",
			url: "../php/select.php",
			data: {
				user: $('#regist .box .center #user').val(),
				pw: $('#regist .box .center #pw').val()
			},
			success: function(resp) {
				if(!resp.result) {
					$('#regist .box .center .notice1').css({
						display: 'block'
					});
					$('#regist .box .center .notice1').html(resp.reason);
				}
			},
			error: function(error) {

			}
		});
	})
	$('#regist .box .center #user').focus(function() {
		$('#regist .box .center .notice1').css({
			display: 'none'
		});
		$('#regist .box .center .notice1').html('');
	})
	//	正则验证
	regExp();

	function regExp() {
		var a, b, c, d;
		//		手机号正则
		$('#regist .box .center #user').blur(function() {
			var reg = /^1[34578]{1}\d{9}$/;
			if(reg.test($('#regist .box .center #user').val())) {
				a = true;
			} else {
				a = false;
				$('#regist .box .center .notice1').css({
					display: 'block'
				});
				$('#regist .box .center .notice1').html('手机号格式错误');
			}
		})
		//		密码正则
		$('#regist .box .center #pw').blur(function() {
			if($('#regist .box .center #pw').val() === '') {
				b = false;
				$('#regist .box .center .notice2').css({
					display: 'block'
				});
				$('#regist .box .center .notice2').html('密码不能为空');
			} else {
				b = true;
			}
		})
		$('#regist .box .center #pw').focus(function() {

			$('#regist .box .center .notice2').css({
				display: 'none'
			});
			$('#regist .box .center .notice2').html('');
		})
		//		重复密码正则
		$('#regist .box .center #pw2').blur(function() {
			if($('#regist .box .center #pw2').val() === '') {
				c = false;
				$('#regist .box .center .notice3').css({
					display: 'block'
				});
				$('#regist .box .center .notice3').html('密码不能为空');
			} else if($('#regist .box .center #pw').val() !== $('#regist .box .center #pw2').val()) {
				$('#regist .box .center .notice3').css({
					display: 'block'
				});
				$('#regist .box .center .notice3').html('两次密码须一致');
				c = false;
			} else {
				c = true;
			}
		})
		$('#regist .box .center #pw2').focus(function() {
			$('#regist .box .center .notice3').css({
				display: 'none'
			});
			$('#regist .box .center .notice3').html('');
		})

		//满足正则注册可以点击，否则不可点击
		$('#regist .box .center .mask').mouseenter(function() {
			if($('#regist .box .center .declaration input').prop('checked')) {

				d = true;
			} else {
				d = false;
			}
			console.log('a');
			if(a && b && c && d) {
				$('#regist .box .center .mask').hide();
			} else {
				$('#regist .box .center .mask').show();
			}
		})
		$('#regist .box .center .resert').mouseout(function(){
			$('#regist .box .center .mask').show();
		})
//		$('#regist .box .center .resert').mouseleave(function() {
//			$('#regist .box .center .mask').show();
//		})

	}

}