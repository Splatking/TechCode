<?php
    //DataHolder
    $GivenID;
    $GivenUsername;
    $GivenFirstname;
    $GivenLastname;
    $GivenBirthday;
    $GivenEmail;
    $GivenWorkMail;
    $GivenPhoneNumber;
    $GivenLand;
    $GivenAdres;
    $GivenDeliverCode;
    $GivenRol;

    //DATABASE CONNECTION
    $servername = "localhost";
    $username = "TechCode_Systems";
    $password = "System123";
    $database = "techcode_database";

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $username = $request->username;
    $password = $request->password;

    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);

    $sql = "SELECT * FROM accounts WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $GivenID = $row["Tech_ID"];
            $GivenUsername = $row["Gebruikersnaam"];
            $GivenFirstname = $row["Voornaam"];
            $GivenLastname = $row["Achternaam"];
            $GivenBirthday = $row["Geboortedatum"];
            $GivenEmail = $row["Email"];
            $GivenWorkMail = $row["Werkmail"];
            $GivenPhoneNumber = $row["Telefoonnummer"];
            $GivenLand = $row["Land"];
            $GivenAdres = $row["Adres"];
            $GivenDeliverCode = $row["Postcode"];
            $GivenRol = $row["Rol"];
        }

        //Cookie setter to send data over the site
        setcookie("Tech_ID", $GivenID, time() + (86400 * 30), "/");
        setcookie("Username", $GivenUsername, time() + (86400 * 30), "/");
        setcookie("Firstname", $GivenFirstname, time() + (86400 * 30), "/");
        setcookie("Lastname", $GivenLastname, time() + (86400 * 30), "/");
        setcookie("Birthday", $GivenBirthday, time() + (86400 * 30), "/");
        setcookie("Email", $GivenEmail, time() + (86400 * 30), "/");
        setcookie("WorkEmail", $GivenWorkMail, time() + (86400 * 30), "/");
        setcookie("Phonenumber", $GivenPhoneNumber, time() + (86400 * 30), "/");
        setcookie("Country", $GivenLand, time() + (86400 * 30), "/");
        setcookie("Adres", $GivenAdres, time() + (86400 * 30), "/");
        setcookie("DeliverCode", $GivenDeliverCode, time() + (86400 * 30), "/");
        setcookie("Rol", $GivenRol, time() + (86400 * 30), "/");


        http_response_code(200);
        echo json_encode(array("message" => "Login successful"));
    } else {
        http_response_code(401);
        echo json_encode(array("message" => "Invalid username or password"));
    }

    $conn->close();
?>