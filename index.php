<?php
include 'lib.php';
//$servername="127.0.0.1";
//$username="liyiwei";
//$password="li130214";
$conn=new mysqli(SERVERNAME,USERNAME,PASSWORD,DBNAME);
if ($conn->connect_error){
    $msg="数据库连接错误";
}//echo "mysql连接成功"."<br>";


$name=$_GET['name'];
$qq=$_GET['subject'];
$tel=$_GET['tel'];
$context=$_GET['context'];
if (isset($name)&&isset($qq)&&isset($tel)&&isset($context) &&strlen($tel)==11){
    $sql="INSERT INTO `register` (`name`, `qq`, `tel`, `context`) VALUES ('".$name."', '".$qq."', '".$tel."', '".$context."')";
    if ($conn->query($sql)===TRUE){
        $msg='报名成功';
        //echo "insert successfully";
    }else{
        $msg='报名失败';
        //die('Error:'.$sql.'<br>'.$conn->error   );
    }
}elseif(strlen($tel)!=11){
    $msg='电话号码位数不正确';
}else{
    $msg='请填写完整信息';
}
$conn->close();
echo $msg;
?>
