autoList();


//返回顶部和头部滑动菜单
function autoList() {
//	返回顶部代码
	$('#footer .w .footer_bottom .return').click(function button(){
		document.documentElement.scrollTop -=100
		document.body.scrollTop -=100 ;
		
		var x= setTimeout(function(){
			button();
		},30)
		if((document.documentElement.scrollTop ||document.body.scrollTop) ===0){
			clearTimeout(x);
		}
	})
//	窗口滑动
	window.onscroll = function() {
//		返回顶部
		var up = document.querySelector('#footer .w .footer_bottom .return');
//		头部菜单栏
		var list = document.querySelector('#autoList');
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
//		头部菜单栏变化
		if(scroll < 200) {
			//			list.style = 'display:none';
			$('#autoList').slideUp(300);
		} else {
			//			list.style = 'display:block';
			$('#autoList').slideDown(300);
		}
//		返回顶部按钮变化
		if(scroll < 500){
			up.style = 'display:none';
		}else{
			up.style = 'display:block'
		}
		//		console.log(scroll);
	}
}