
$(function(){
	//关闭头部提醒区域
	$("#close_topbar").click(function(){
		$(".barwrapper").slideUp();
	})
	// 5s后自动关闭
	setTimeout(function(){
		$(".barwrapper").slideUp();
	},2000)
	//轮播代码
	//获取窗口可视化宽度
	var imgwidth=$(window).width();
	$(".lunbo img").css({"width":imgwidth});
	$(".point_wrapper").css({"width":imgwidth});
	var temp=1;
	setInterval(function(){
		if(parseInt($(".lunbo_img_wrapper").css("left"))==-2*imgwidth){
			$(".lunbo_img_wrapper").css({"left":"0px"});
		}else{
			$(".lunbo_img_wrapper").css({"left":"-="+imgwidth});		}
		var point_index=temp%3;
		var point=$(".point span");
		$(point[point_index]).addClass('select');
		$(point[point_index]).siblings().removeClass('select');
		temp++;
	},5000);
	// $(".point span").click(function(){
	// 	var index=$(this).attr("data");
	// 	console.log(imgwidth);
	// 	if(index=="0"){
	// 		$(".lunbo_img_wrapper").css({"left":"0px"});
	// 		$(this).addClass('select');
	// 		$(this).siblings().removeClass('select');
	// 	}else if(index=="1"){
 //            $(".lunbo_img_wrapper").css({"left":"-"+imgwidth+"px"});
 //            $(this).addClass('select');
	// 		$(this).siblings().removeClass('select');
	// 	}else{
	// 		$(".lunbo_img_wrapper").css({"left":"-"+2*imgwidth+"px"});
	// 		$(this).addClass('select');
	// 		$(this).siblings().removeClass('select');
	// 	}

	// })
	// 根据浏览器可视宽度调整数据列数
	if(parseInt(imgwidth)>1800){
		$(".course").css({"width":"988px"});
	}else{
		$(".course").css({"width":"752px"});
		$(".course_center").css({"width":"972px","margin":"0 auto"});
	}
	// 右侧导航栏动画
	$(".leftbar ul li a").hover(function(){
		if($(this).attr("class")=="a_top"){
			$(this).animate({"background-position-x":"-50px","background-position-y":"0px"})
		}else if($(this).attr("class")=="a_mail"){
			$(this).animate({"background-position-x":"-50px","background-position-y":"-50px"})
		}
		else if($(this).attr("class")=="a_qq"){
			$(this).animate({"background-position-x":"-50px","background-position-y":"-100px"})
		}else{
			$(this).animate({"background-position-x":"-50px","background-position-y":"-150px"})
		}
	},function(){
		if($(this).attr("class")=="a_top"){
			$(this).animate({"background-position-x":"0px","background-position-y":"0px"})
		}else if($(this).attr("class")=="a_mail"){
			$(this).animate({"background-position-x":"0px","background-position-y":"-50px"})
		}
		else if($(this).attr("class")=="a_qq"){
			$(this).animate({"background-position-x":"0px","background-position-y":"-100px"})
		}else{
			$(this).animate({"background-position-x":"0px","background-position-y":"-150px"})
		}
	}).click(function() {
		/* Act on the event */
		if($(this).attr("class")=="a_top"){
			$("body").animate({scrollTop:"0px"});
		}
	});
	//
	$(window).scroll(function(){
	if(parseInt($("body").scrollTop())>1200){
		$(".leftbar").show();
	}else{
		$(".leftbar").hide();
	}
	})
	
})

