$(document).ready(function(){
	$('#fatui').click(function(){
				$("#mymodal").modal("show");
			})
	$('#sx').click(function(){
		$("#mysixin").modal("show");
	})
	$('#fsbt').click(function(){
		$(this).parent().hide();
		$('.yinc').show();
		$('.sx1').hide();
	})
	$('#lg').click(function(){
		$('#bddiv').show();
		$('.yinc').hide();
		$('.sx1').show();
	})
})