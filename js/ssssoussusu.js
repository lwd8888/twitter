$(function(){
	$(".ipt").click(function(){
		$(this).css("background-color","#fff")
		$(".lishi").show();
		event.stopPropagation();
		
	})
	$(".ipt").blur(function(){
		$(this).css("background-color","#F5F8FA")
	})
$(".lishi ul li span").click(function(){
	var sp=$(this).text();
			$(".lishi").hide();
			$(".ipt").val(sp);
})
	$(".xiaowo").click(function(){
			$("#ggl").toggle();
})
	$(".lishi ul li p").click(function(){
	$(this).parent().hide();
	})
	$(".bc p").click(function(){
	$('.lishi ul').hide();
	$(".tp2").show();
	$(".tp1").hide();
	})
	$(".tp2").click(function(){
		$(".lishi").hide()
		})
	
	$(".asou").click(function(){
		var tt=$(".ipt").val();
		if(tt!=''){
		$(".lsss").append('<li><span class="jrsp"></span><p>×</p></li>')
		$(".jrsp").text(tt);
		
		}
//		var i=$(".lsss li").index();
		
		})
	
})