<?php
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

    $username = mysqli_real_escape_string($conn, $request->username);
    $email = mysqli_real_escape_string($conn, $request->email);
    $phonenumber = mysqli_real_escape_string($conn, $request->phonenumber);
    $birthday = mysqli_real_escape_string($conn, $request->birthday);
    $firstname = mysqli_real_escape_string($conn, $request->Firstname);
    $lastname = mysqli_real_escape_string($conn, $request->Lastname);
    $password = mysqli_real_escape_string($conn, $request->password);

    $sql = "INSERT INTO `accounts` (Gebruikersnaam, Voornaam, Achternaam, Geboortedatum, Email, Telefoonnummer, Wachtwoord) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    $stmt->bind_param("ssssdis", $username, $firstname, $lastname, $birthday, $email, $phonenumber, $password);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        http_response_code(200);
        echo json_encode(array("message" => "Registration successful"));
    } else {
        http_response_code(401);
        echo json_encode(array("message" => "Registration failed"));
    }

    $stmt->close();
    $conn->close();
?>