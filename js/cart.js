cart();
function cart(){
	 $.get('../php/cart.php', {user: localStorage.getItem("username")}, function (resp) {
        console.log(resp);
        for (var i = 0; i < resp.length; i++) {
            createTR(resp[i]);
            console.log(resp[i]);
//          $('tr>td:nth-of-type(2)').html("<img src='"+ resp[0] +"'>")
        }
    })

    function createTR(info) {
        //template会将script模板中的{{}}包含的字符串，进行替换
        //第一个参数是模板的id,第二个参数是填充模板的json对象
        //模板中的{{}}所包含的内容，在这个json对象中，必须存在
//      http://image.smartisanos.cn/resource/3859ea627faeb07b34b55c1ce736012b.png?x-oss-process=image/resize,w_80/quality,Q_100/format,webp
        tpl = template('tr-tpl', {
        	checkBox:'',
        	id:info.id,
        	img:info.src,
            name: info.name,
            price: info.price,
            count: info.count,
           sumprice:info.price
        });

//        $(tpl).appendTo('tbody');
//        $('tbody').append(tpl);
		
        var temp = document.createElement('tbody');
        temp.innerHTML = tpl;
        document.querySelector('tbody').appendChild(temp.children[0]);
//      $('tr>td:last-of-type').html('删除');
        $('tr>td:nth-of-type(1)').html("<input type='checkbox' >");
//      $('tr>td:nth-of-type(2)').html("<img src='"+ info.src +"'>")
    }
}
//登录信息
loginMsg();
function loginMsg(){
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
	$('#header #loginMsg .item2').click(function(){
		localStorage.clear();
		location.reload();
	})
}

//删除数据库商品
setTimeout(function(){
	removeTd();
},200)

function removeTd(){
	$('#center .w .cart tbody .del').click(function(){
//		console.log($(this).parent().children('#id').html())
		$.ajax({
			type:"get",
			url:"../php/cart_del.php",
			data:{
				cartid:$(this).parent().children('#id').html()
			},
			success:function(resp){
				if(resp.result){
					location.reload()
				}else{
					alert('删除失败')
				}
			},
			error:function(){
				
			}
		});
	})
}

//全选
setInterval(function(){
	allChose();
	
},10)
//allChose();
function allChose(){
	$('#center #buy .all').change(function(){
        var checked = $(this).prop('checked');
        $('#center .cart tbody').find('input').prop('checked',checked);
    })
    $('#center .cart tbody').find('input').change(function(){
        var checkedCount = $('#center .cart tbody').find('input:checkbox:checked').length;
        var allCount = $('#center .cart tbody input').length;
        $('#center #buy .all').prop('checked',checkedCount===allCount);
    })
}
//setInterval(function(){
//	sumMoney();
//},100)

function sumMoney(){
	var checked = $('#center .cart tbody').find('input:checkbox:checked');
	console.log(checked)
	var sum = 0;
	for(var i = 0;i<checked.length;i++){
		sum += $(this).parent().parent().children('.price').html();
	}
	console.log(sum)
}
