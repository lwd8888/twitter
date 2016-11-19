function getVal()
{
   var v1=document.getElementById("name").value;
 var submenu=document.getElementById('div1');
    if(v1.length<6){
	submenu.style.display="";    
      document.getElementById("div1").innerHTML = "用户ID不能小于6位!";
      submenu.style.color="red";
   }else{
		document.getElementById("div1").innerHTML = "用户可以使用!";
		submenu.style.color="#BEBDBD";    
   }
   }
   
   function getVal1()
{
   var v1=document.getElementById("pass").value;
    var submenu=document.getElementById('div2');
    if(v1.length<6){
	submenu.style.display="";
      document.getElementById("div2").innerHTML = "密码不能小于6位!";
       submenu.style.color="red";
   }else{
   	document.getElementById("div2").innerHTML = "密码可以使用!";
	submenu.style.color="#BEBDBD";  
   }
   }

function getVal3()
{
   var v1=document.getElementById("name1").value;
 var submenu=document.getElementById('div3');
    if(v1.length<6){
	submenu.style.display="";
      submenu.innerHTML = "用户id不能小于6位!";
		submenu.style.color="red";
   }else{
	 document.getElementById("div3").innerHTML = "用户id可以使用!";
	submenu.style.color="#BEBDBD";
   }
   }

function getVal4()
{
   var v1=document.getElementById("email").value;
 var submenu=document.getElementById('div4');
    if(v1.length<6){
	submenu.style.display="";
      submenu.innerHTML = "用户名字不能小于6位!";
		submenu.style.color="red";
   }else{
	 document.getElementById("div4").innerHTML = "用户名字可以使用!";
	submenu.style.color="#BEBDBD";
   }
   }
function getVal5()
{
   var v1=document.getElementById("pass1").value;
 var submenu=document.getElementById('div5');
    if(v1.length<6){
	submenu.style.display="";
      submenu.innerHTML = "密码不能小于6位!";
		submenu.style.color="red";
   }else{
	 document.getElementById("div5").innerHTML = "密码可以使用!";
	submenu.style.color="#BEBDBD";
   }
   }