window.onload = function(){

}


function validate(){
	var username = $("username").value;
	var password = $("password").value;
	console.log("Got the values");
 var re =/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})/ ;
 if(!(re.test(password))){
  alert("Password not valid");
  return false;
}


var responseMessage;
var requeststring = "login.php?username="+username+"&password="+password;
var getstuff = new XMLHttpRequest();
getstuff.onreadystatechange = function(){
  if(getstuff.readyState==4 && getstuff.status==200 ){
   responseMessage = getstuff.responseText;
   console.log(responseMessage);
   if (responseMessage=="fail") {
     document.getElementById("login_status").innerHTML= "<div class='loginstat'><strong> Login Failed </strong></div>";
     
   }else if(responseMessage=="pass"){
    document.getElementById("login_status").innerHTML= "<div class='loginstat'><strong> Login Success </strong></div>";
    window.location.href="homepage.html";
    
  }
  
  
}
};
getstuff.open("get",requeststring ,true);
getstuff.send();



};
