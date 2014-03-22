<?php

/* === MYSQL CONNECTION SETTINGS === */

// Host name, domain or IP Address for the MySQL server's location
$mysql_server = "localhost";

// Username used to connect to the MySQL server
$mysql_user = "root";

// Password used to connect to the MySQL server
$mysql_password = "";

// Name of the MySQL database to connect to
$mysql_db = "nebula";

// Name of the MySQL table to hold the email addresses
$mysql_table = "messages";

/* === SIGNUP MESSAGES/ALERTS === */

// Message to display when no name is entered
$emptyname_error = "<font color='#ea6d6d'>You did not enter a name!</font>";

// Message to display when no email address is entered
$emptyemail_error = "<font color='#ea6d6d'>You did not enter an email address!</font>";

// Message to display when no email address is entered
$emptymsg_error = "<font color='#ea6d6d'>You did not enter a message!</font>";

// Message to display when the entered email address is invalid
$invalidemail_error = "<font color='#ea6d6d'>This is not a valid email address!</font>";

// Message to display when the email address was not inserted into the database successfully
$insertmsg_error = "<font color='#ea6d6d'>Sorry, we had an error!</font>";

// Message to display when the user is successfully signed up
$success_msg = "<font color='#a9f683'>Message sent!</font>";

/* === INSERT INTO DATABASE AND SIGNUP CODE === */

if($_GET['action'] == 'send'){  
    mysql_connect($mysql_server,$mysql_user,$mysql_password);    
    mysql_select_db($mysql_db);  
  
    //sanitize data
	$name = mysql_real_escape_string($_POST['name']);
    $email = mysql_real_escape_string($_POST['email']);  
	$msg = mysql_real_escape_string($_POST['message']); 
  
    //validate email address - check if input was empty
	if(empty($name)){  
        $status = "error";  
        $message = $emptyname_error; 
    } else if(empty($email)){  
        $status = "error";  
        $message = $emptyemail_error; 
    } else if(empty($email)) {
		$status = "error";  
        $message = $emptyname_error; 
	} else if(!preg_match('/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/', $email)){ //validate email address - check if is a valid email address  
        $status = "error";  
        $message = $invalidemail_error;  
    } else if(empty($msg)) {
		$status = "error";  
        $message = $emptymsg_error; 
	}
    else {  
           $date = date('Y-m-d');  
           $time = date('H:i:s');  
  
           $insertSignup = mysql_query("INSERT INTO $mysql_table (name, email, msg_date, msg_time, message) VALUES ('$name', '$email', '$date', '$time', '$msg')");
		   
           if($insertSignup){  
               $status = "success";  
               $message = $success_msg;     
           }  
           else {  
               $status = "error";  
               $message = $insertmsg_error;    
           }  
     }  
  
    //return json response   
    $data = array(  
        'status' => $status,  
        'message' => $message  
    );  
  
    echo json_encode($data);  
  
    exit;  
}  
?>