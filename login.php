<?php
    

	$username = $_REQUEST['username'];
	$password = $_REQUEST['password'];
	$con=mysqli_connect("localhost","admin");
	if (!$con) 
    {
		echo "Connection failed";
		return false;
	}

	
   
    $sql = "SELECT * FROM user WHERE username = '$username' and password = '$password';";
    $results= mysqli_query($con,$sql);
    if (sizeof(mysqli_fetch_array($results))==0)
    {
    	// sends something to javascript if it fails
    	echo "fail";
    }

    else
    {
    	// ends something to javascript if it succeeds
    	//session_start();
    	//$_SESSION['username']=$username;
    	setcookie('username',$username,time()+2000);
    	echo "pass";
    }

?>
