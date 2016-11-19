$(function(){
	$(".bji").click(function(){
		$(".biandiv").css({"backgroundColor":"#00445a"})
		$(".biandiv").animate({height:"315px"},200)
		$(".tianjia").stop().animate({height:"313px"},200)
		$(".quxiao").show();
		$(this).hide();
		$(".bcgg").show();
		$(".wocao2").show();
		$(".divim2").show();
		$(".zhaopq").show();
		$(".zhetoubu").show();
		$(".zhezhaoxia").show();
		$(".zhaodua").show();
		$(".zhaopq").animate({top:"60px"},200);
		$(".zhaopq").append('<img src="img/jia.png"class="tiantutu">')
	})
	$(".quxiao").click(function(){
		$(".biandiv").stop().animate({height:"173px"},200)
		$(".tianjia").stop().animate({height:"162px"},200)
		$(this).hide();
		$(".wocao2").hide();
		$(".divim2").hide();
		$(".zhaopq").hide();
		$(".zhetoubu").hide();
		$(".zhezhaoxia").hide();
		$(".zhaodua").hide();
		$(".zhaopq").animate({top:"20px"},200);
		$(".bji").show();
		$(".bcgg").hide();
		$(".biandiv").css({"backgroundColor":"#0084b4"})
		$(".biandiv img").last().remove();
		})
	$(".bcgg").click(function(){
		$(".bji").show();
		$(this).hide();
		$(".quxiao").hide();
	})
	$(".haodua a").hover(function(){
		$(this).find("p").stop().animate({bottom:"-10px"},200)
	},function(){
		$(this).find("p").stop().animate({bottom:"-13px"},200)
	})
	
})