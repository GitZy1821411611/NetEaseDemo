
$(function(){
	//关闭头部提醒区域
	$("#close_topbar").click(function(){
		$(".barwrapper").slideUp();
		$(".lunbo").animate({top:"90px"});
	})
	//轮播代码
	//获取窗口可视化宽度
	var imgwidth=$(window).width();
	$(".lunbo img").css({"width":imgwidth});
	$(".point_wrapper").css({"width":imgwidth});
	setInterval(function(){
		if(parseInt($(".lunbo_img_wrapper").css("left"))==-2*imgwidth){
			$(".lunbo_img_wrapper").animate({left:"0px"});
		}else{
			$(".lunbo_img_wrapper").animate({left:"-="+imgwidth});
		}	
	},3500);
})
