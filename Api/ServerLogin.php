<?php
    namespace Api;

    class ServerLogin {
        // Class properties
        private $GivenID;
        private $GivenUsername;
        private $GivenFirstname;
        private $GivenLastname;
        private $GivenBirthday;
        private $GivenEmail;
        private $GivenWorkMail;
        private $GivenPhoneNumber;
        private $GivenLand;
        private $GivenAdres;
        private $GivenDeliverCode;
        private $GivenRol;

        // Database connection properties
        private $servername = "localhost";
        private $username = "TechCode_Systems";
        private $password = "System123";
        private $database = "techcode_database";

        public function Login($LoginUsername, $LoginPassword){
            $conn = new \mysqli($this->servername, $this->username, $this->password, $this->database);
        
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
        
            $sql = "SELECT * FROM `accounts` WHERE `Gebruikersnaam`=?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $LoginUsername);
            $stmt->execute();
        
            $result = $stmt->get_result();
        
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $hashedPassword = $row["Wachtwoord"];
        
                if(password_verify($LoginPassword, $hashedPassword)){
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
        
                    // Return the JSON response
                    echo json_encode($responseData);
                    return json_encode($responseData);
                } else {
                    http_response_code(401);
                    return json_encode(array("message" => "Invalid username or password"));
                }
        
                $stmt->close();
                $conn->close();
            } else {
                http_response_code(401);
                return json_encode(array("message" => "Invalid username or password"));
            }
        }

        public function CreationLogin($TechID){
            $conn = new mysqli($servername, $username, $password, $database);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

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
                $conn->close();
            } else {
                http_response_code(401);
                echo json_encode(array("message" => "Invalid TechID"));
            }
        }

        public function BotLogin($DiscordID){
            $conn = new mysqli($servername, $username, $password, $database);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

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
            $conn->close();
        }
    } 

    // Server Setup
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

    $server = new ServerLogin();

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $postdata = file_get_contents("php://input");

        if($postdata){
            $request = json_decode($postdata, true);

            if (isset($request["username"]) && isset($request["password"])) {
                $server->Login($request["username"], $request["password"]);
            } elseif (isset($request["TechID"])) {
                $server->CreationLogin($request["TechID"]);
            } elseif (isset($request["DiscordID"])) {
                $server->BotLogin($request["DiscordID"]);
            } else {
                http_response_code(400);
                echo json_encode(array("message" => "Invalid request"));
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "No data received"));
        }
    } else {
        http_response_code(405);
        echo json_encode(array("message" => "Method not allowed"));
    }
?>