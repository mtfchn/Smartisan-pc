login();
function login(){
	$('#login .box .center .login').click(function(){
		$.ajax({
			type:"post",
			url:"../php/login.php",
			data:{
				user:$('#login .box #user').val(),
				pw:$('#login .box #pw').val()
			},
			success:function(resp){
				if(resp.result){
					localStorage.setItem('username',$('#login .box #user').val());
					location.href="../index.html";
				}else{
					$('#login .box .center .notice2').css({
						display: 'block'
					});
					$('#login .box .center .notice2').html('账号或密码错误');
				}
			},
			error:function(){
				
			}
		});
	})
	$('#login .box .center #pw').focus(function() {
		$('#login .box .center .notice2').css({
			display: 'none'
		});
		$('#login .box .center .notice2').html('');
	})
	
	$('#login .box .center #user').blur(function() {
		$.ajax({
			type: "post",
			url: "../php/select.php",
			data: {
				user: $('#login .box .center #user').val(),
				pw: $('#login .box .center #pw').val()
			},
			success: function(resp) {
				if(resp.result) {
					$('#login .box .center .notice1').css({
						display: 'block'
					});
					$('#login .box .center .notice1').html(resp.reason);
				}
			},
			error: function(error) {

			}
		});
	})
	$('#login .box .center #user').focus(function() {
		$('#login .box .center .notice1').css({
			display: 'none'
		});
		$('#login .box .center .notice1').html('');
	})
}
