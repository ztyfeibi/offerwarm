<?php
include 'lib.php';
header("Access-Control-Allow-Origin: *");
//$servername="127.0.0.1";
//$username="liyiwei";
//$password="li130214";
//$conn=new mysqli($servername,$username,$password,'homework');
$conn=new mysqli(SERVERNAME,USERNAME,PASSWORD,DBNAME);
if ($conn->connect_error){
    $msg="数据库连接错误";
}//echo "mysql连接成功"."<br>";


$name=$_GET['name'];
$qq=$_GET['subject'];//qq==subject
$tel=$_GET['tel'];
$context=$_GET['context'];
$msg="第一步";

$sql="SELECT * FROM `register` WHERE `name`='".$name."'";
$res=$conn->query($sql);
//$sql=$conn->prepare("SELECT * FROM `warmth` WHERE `name`= ?");
//$sql->bind_param("s",$name);
//$res=$sql->execute();
if($res->num_rows>0){
    $msg ="已报名";
    die($msg);
}

if (isset($name)&&isset($qq)&&isset($tel)&&strlen($tel)==11){
    //$sql="INSERT INTO `warmth` (`name`, `subject`, `tel`, `context`) VALUES ('".$name."', '".$qq."', '".$tel."', '".$context."')";
    $sql=$conn->prepare("INSERT INTO `register` (`name`, `subject`, `tel`, `context`) VALUES (?,?,?,?)");
    $sql->bind_param("ssss",$name,$qq,$tel,$context);
    $res=$sql->execute();
    if ($res===TRUE){
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
//$name="李奕玮";
//while($row = $res->fetch_assoc()) {
//    echo $row["name"]."<br>".  $row["subject"] ."<br>". $row["tel"] ."<br>". $row["context"]."<br>";
//}
$res->close();
$conn->close();
echo $msg;
?>
