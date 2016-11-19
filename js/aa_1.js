$(function () {
 $('#bta,#lp').click(function(){
$('#up').click();
$(".xxs").stop().animate({height:"80px"},10);
$(".zhong_weibu").show();
$(".lp").hide();
event.stopPropagation();
});
	$(".xxs").bind("click",function(event){
		$(".xxs").animate({height:"80px"},10);
		$(".lp").hide();
		$(".zhong_weibu").show();
		event.stopPropagation();
	})
 $(".main,#toubu").bind("click",function(event){
		$(".xxs").animate({height:"35px"},10);
		$(".zhong_weibu").hide();
		$(".lp").show();
		event.stopPropagation();
	})
// $('#lp').click(function(){
//$('#up').click();
//$(".xxs").animate({height:"35px"},10);
//		$(".zhong_weibu").hide();
//		$(".lp").show();
//event.stopPropagation();
//});
$('#bta2').click(function(){
		$(".gif").show();
$(".zhong_weibu").show();
$(".lp").hide();
event.stopPropagation();

});
$(".main,.main_zhong,#toubu").click(function(){
		$(".gif").hide();

});
});