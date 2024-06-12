<?php
    namespace Api;

    class ServerCreate {
        //DATABASE CONNECTION
        private $servername = "localhost";
        private $username = "TechCode_Systems";
        private $password = "System123";
        private $database = "techcode_database";
    
        public function Create($GivenUsername, $Email, $Phonenumber, $Birthday, $Firstname, $Lastname, $Password) {
            $conn = new \mysqli($this->servername, $this->username, $this->password, $this->database);
    
            if ($conn->connect_error) {
                return array("code" => 500, "message" => "Database connection failed: " . $conn->connect_error);
            }
    
            $hashed_password = password_hash($Password, PASSWORD_BCRYPT);
    
            $sql = "INSERT INTO `accounts` (Gebruikersnaam, Voornaam, Achternaam, Geboortedatum, Email, Telefoonnummer, Wachtwoord) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
    
            if ($stmt === false) {
                $conn->close();
                return array("code" => 500, "message" => "SQL statement preparation failed: " . $conn->error);
            }
    
            $stmt->bind_param("sssssss", $GivenUsername, $Firstname, $Lastname, $Birthday, $Email, $Phonenumber, $hashed_password);
            $stmt->execute();
    
            if ($stmt->affected_rows > 0) {
                $stmt->close();
                $conn->close();
                return array("code" => 200, "message" => "Registration successful");
            } else {
                $stmt->close();
                $conn->close();
                return array("code" => 401, "message" => "Registration failed");
            }
        }
    }
    
    // CORS setup
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400'); // cache for 1 day
    }
    
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        }
    
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        }
    
        exit(0);
    }
    
    // Include the mailing system
    include "../MailingSystem/Mailer.php";
    
    
    
    $postdata = file_get_contents("php://input");
    if ($postdata) {
        $request = json_decode($postdata, true);
    
        if (isset($request["username"], $request["email"], $request["phonenumber"], $request["birthday"], $request["Firstname"], $request["Lastname"], $request["password"])) {
            $username = $request["username"];
            $email = $request["email"];
            $phonenumber = $request["phonenumber"];
            $birthday = date('Y-m-d', strtotime($request["birthday"]));
            $firstname = $request["Firstname"];
            $lastname = $request["Lastname"];
            $password = $request["password"];
    
            $server->Create($username, $email, $phonenumber, $birthday, $firstname, $lastname, $password);
    
            sendEmail($email, $username, "Account creation");
            http_response_code(200);
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Invalid request"));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "No data received"));
    }    
?>