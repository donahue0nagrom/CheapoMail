<?php 

    if(isset($_COOKIE['username']))
    {
        $current_user = $_COOKIE['username'];
        setcookie('username',$current_user,time()-900);
        echo 'You are now logged out';
    }

    else
    {
        echo 'You are already logged out';
    }

?>
