<?php
	$hostname = "localhost:3306";
	$username = "root";
	$password = "";
	$dbname = "ite220_userinfo database";

	$conn = new mysqli($hostname, $username, $password, $dbname);
	if ($conn->connect_error) {
		die($conn->connect_error);
	}
	/*else {
		echo "connected";
	}*/
	function checklogin($uusername, $upassword){
		global $conn;
		$query = "SELECT * FROM users";
		$result = $conn->query($query);
		if (!$result) {
			die($conn->error);
		}
		while ($row=mysqli_fetch_array($result)) {
			echo "username". "&nbsp". $row["username"]. "<br>";
			echo "password". "&nbsp". $row["password"]. "<br>";

		}
	}






?>