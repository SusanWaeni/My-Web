<?php

$conn = mysqli_connect('localhost','root','','sbs');
$hostname='localhost';
$dbusername='root';
$dbpassword='';
$dbname='sbs';

if ($conn)
{
    echo "Successful Connection";
}
else{
    if (!$conn)
{
    echo "Connection to the sbs Database failed";
}

}

?>