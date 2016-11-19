$(function(){
   	

$(".fatui2").click(function(){ 

$(".meul").append('<li><div class="me"><a href="#"><img src="img/dawo.jpg"></a><p class="pp1"><a href="#"class="pp1_a1">doget</a><span>@240306042</span><a href="#" id="timeShow"class="timeShow">xx</a></p><div class="p2"><p class="ccp"></p><p class="pp2"></p></div><p class="pp3"><a href="#"><img src="img/m1.jpg"id="tup1"> </a><a href="#"><img src="img/m2.jpg"id="tup2"> </a><a href="#"><img src="img/m3.jpg"id="tup3"> </a><a href="#"><img src="img/m4.jpg"id="tup4"> </a></p></div></li>');
//var tslen=$('.timeShow').length;
//alert(tslen)
//alert($('.timeShow').text())
var ts=$(".timeShow").length;
//var i=ts-1;
//alert(i)
var i;
for(i=0;i<ts;i++){
//	alert($('.timeShow').eq(i).text())
showTime();
}
var neirong = $(".xxs").html();
var ar=$(".area").val();
//$(".pp2").append('');
$(".ccp").text(ar);
$(".pp2").append(neirong);
$(".xxs").find("img").remove();
$(".area").empty();
})
$(".gif img").click(function(){
	alert("kkk");
var img = $(this).clone();   //克隆一个笑脸
$(".xxs").append(img);
});

 var len=$('.meul>li').length;
$('.meul>li').each(function(i){
	alert($(this).val(i))
})

// showTime()
 function showTime()
    {
    var now = new Date(); //获取当前时间
       var d= new Date("2016/10/10,16:31:00");  
   var j;
   
// index=ts.index();
if(d.getFullYear()==now.getFullYear()){
   	if(d.getMonth()==now.getMonth()){
   	var m = (now.getTime()-d.getTime())/(1000*60*60)
		if(m>24){
			j=now.getDay()-d.getDay();
			document.getElementById('timeShow').innerHTML =j+"天";
		}else{
			j =now.getHours()-d.getHours();
		     if(j<1){
				j =now.getMinutes()-d.getMinutes()
				if(j<1){
				j=now.getSeconds()-d.getSeconds();
				document.getElementById('timeShow').innerHTML =j+"秒";
				}else{
				document.getElementById('timeShow').innerHTML =j+"分钟";	
				}
			}else{
			document.getElementById('timeShow').innerHTML =j+"小时";
				}
		}

   }else{
   		j=now.getMonth()-d.getMonth();
   	document.getElementById('timeShow').innerHTML =j+"月";
   	}
}else{
	document.getElementById('timeShow').innerHTML =d;
}
       
}

})

//<div class="me">
//<a href="#"><img src="img/dawo.jpg"></a>
//<p class="pp1"><a href="#"class="pp1_a1"></a><span></span><a href="#" id="timeShow"></a></p>
//<div class="p2"><p class="pp2"></p></div>
//<p class="pp3"><a href="#"><img src="img/m1.jpg"> </a><a href="#"><img src="img/m2.jpg"> </a><a href="#"><img src="img/m3.jpg"> </a><a href="#"><img src="img/m4.jpg"> </a></p>
//</div>
//<p class="pp1"><a href="#"class="pp1_a1"></a><span></span><a href="#"id="timeShow"></a></p><div class="p2"><p class="pp2"></p></div><p class="pp3"><a href="#"><img src="img/m1.jpg"> </a><a href="#"><img src="img/m2.jpg"> </a><a href="#"><img src="img/m3.jpg"> </a><a href="#"><img src="img/m4.jpg"> </a></p>
//'<li>
//<div class="me">
//<a href="#"><img src="img/dawo.jpg"></a>
//<p class="pp1"><a href="#"class="pp1_a1">doget</a><span>@240306042</span><a href="#" id="timeShow"class="timeShow">xx</a></p>
//<div class="p2"><p class="ccp"></p><p class="pp2"></p></div>
//<p class="pp3"><a href="#"><img src="img/m1.jpg"id="tup1"> </a><a href="#"><img src="img/m2.jpg"id="tup2"> </a><a href="#"><img src="img/m3.jpg"id="tup3"> </a><a href="#"><img src="img/m4.jpg"id="tup4"> </a></p></div></li>'