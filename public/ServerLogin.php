<?php
    //DATA HOLDER
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
    if($postdata){
        $request = json_decode($postdata);
        if (isset($request->username) && isset($request->password)) {
            $username = $request->username;
            $password = $request->password;

            $username = mysqli_real_escape_string($conn, $username);
            $password = mysqli_real_escape_string($conn, $password);

            $sql = "SELECT * FROM `accounts` WHERE `Gebruikersnaam`=? AND `Wachtwoord`=?";
            $stmt = $conn->prepare($sql);

            $stmt->bind_param("ss", $username, $password);

            $stmt->execute();

            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();

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

                $responseData = array(
                    "message" => "Login successful",
                    "GivenID" => $GivenID,
                    "GivenUsername" => $GivenUsername,
                    "GivenFirstname" => $GivenFirstname,
                    "GivenLastname" => $GivenLastname,
                    "GivenBirthday" => $GivenBirthday,
                    "GivenEmail" => $GivenEmail,
                    "GivenWorkMail" => $GivenWorkMail,
                    "GivenPhoneNumber" => $GivenPhoneNumber,
                    "GivenLand" => $GivenLand,
                    "GivenAdres" => $GivenAdres,
                    "GivenDeliverCode" => $GivenDeliverCode,
                    "GivenRol" => $GivenRol
                );

                header('Content-Type: application/json');

                echo json_encode($responseData);
            } else {
                http_response_code(401);
                echo json_encode(array("message" => "Invalid username or password"));
            }

            $conn->close();
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Invalid request"));
        }
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(array("message" => "No data received"));
    } 
?>