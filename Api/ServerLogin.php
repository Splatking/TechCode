<?php
    //Server Settup
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
    }
    
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
    
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
        $request = json_decode($postdata, true);

        
        if (isset($request["username"]) && isset($request["password"])) {
            $username = $request["username"];
            $password = $request["password"];

            $sql = "SELECT * FROM `accounts` WHERE `Gebruikersnaam`=?";
            $stmt = $conn->prepare($sql);

            $stmt->bind_param("s", $username);

            $stmt->execute();

            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $hashedPassword = $row["Wachtwoord"];

                if(password_verify($password, $hashedPassword)){
                    $GivenID = $row["Tech_ID"];
                    $GivenUsername = $row["Gebruikersnaam"];
                    $GivenDiscordID = $row["Discord_ID"];
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
                        "GivenDiscordID" => $GivenDiscordID,
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
    
                $stmt->close();
            } else {
                http_response_code(401);
                echo json_encode(array("message" => "Invalid username or password"));
            }
        } else if(isset($request["TechID"])){
            $TechID = $request["TechID"];

            $sql = "SELECT * FROM `accounts` WHERE `Tech_ID`=?";
            $stmt = $conn->prepare($sql);

            $stmt->bind_param("s", $TechID);

            $stmt->execute();

            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();

                $GivenID = $row["Tech_ID"];
                $GivenUsername = $row["Gebruikersnaam"];
                $GivenDiscordID = $row["Discord_ID"];
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
                    "GivenDiscordID" => $GivenDiscordID,
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

                $stmt->close();
            } else {
                http_response_code(401);
                echo json_encode(array("message" => "Invalid TechID"));
            }
        } else if(isset($request["DiscordID"])){
            $DiscordID = $request["DiscordID"];

            $sql = "SELECT Tech_ID, Gebruikersnaam, Rol FROM `accounts` WHERE `Discord_ID`=?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $DiscordID);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();

                $responseData = array(
                    "message" => "Login successful",
                    "GivenID" => $row["Tech_ID"],
                    "GivenUsername" => $row["Gebruikersnaam"],
                    "GivenRol" => $row["Rol"]
                );

                header('Content-Type: application/json');
                echo json_encode($responseData);
            } else {
                http_response_code(401);
                echo json_encode(array("message" => "Invalid TechID"));
            }

            $stmt->close();
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Invalid request"));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "No data received"));
    }

    $conn->close();
?>