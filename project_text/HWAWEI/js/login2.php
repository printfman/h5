<?php
// 	header("Content-type:text/html;charset=utf-8");
// 	
// 	$_name = $_GET["name"];
// 	$_pwd = $_GET["pwd"];
// 	
// 	
// 	$conn=mysql_connect("localhost","root","root");
// 	
// 	mysql_select_db("test");
// 	
// 	$result = mysql_query("select * from student where stuname = '$_name'",$conn);
// 	
// 	if(mysql_num_rows($result)>=1){
// 		
// 		echo 0;
// 		
// 		
// 	}else{
// 		mysql_query("insert into student values(007,'$_name','$_pwd',520)",$conn);
// 		echo 1;
// 	}
// 	
// 	 mysql_close($conn);
echo 0;
?> 