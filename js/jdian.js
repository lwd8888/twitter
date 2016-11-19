$(document).ready(function(){
// 	$(".fatui").click(function(){
// 		var width=$(window).width();
// 		var ht=$(window).height();
//	$(".djfatui").css({width:width,height:ht})
//	$('.message').show();
//	$(".djfatui").show();
// 	})
   	$(".modal-footer .faceBtn").click(function(e){
$(".modal-footer .face").show(10);
e.stopPropagation();   //阻止事件冒泡
});
//点击屏幕其他地方触发的事件
	$(document).click(function(){
	$(".modal-footer .face").hide(10);
	});
$(".modal-footer .face ul li").click(function(){
var img = $(this).find("img").clone(true);//克隆一个笑脸
$(".modal-body #txt").append(img);
//$(".xxs").animate({height:"80px"},10);
//		$(".lp").hide();
//		$(".zhong_weibu").show();
//			event.stopPropagation();
});
//点击发表触发的事件
$(".modal-footer .btn").click(function(){
var txt = $(".modal-body #txt").html().trim();
if(txt == ""){
$("#txt").focus();
}else{
//$(".msgBox").append("<div class='msgInfo'><dl><dt><img src='img/bg/pic.jpg' width='50' height='50'/></dt><dd>小猪</dd></dl><div class='content'>"+txt+"</div></div>");
$(".modal-body #txt").html("");
}
});
// $(".guanb").click(function(){
// 	$(".message").hide();
// 	$(".djfatui").hide();
// })
})
