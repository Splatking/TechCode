<?php
    namespace Api;

    class ServerAccountTermination {
        // DATABASE CONNECTION
        private $servername = "localhost";
        private $username = "TechCode_Systems";
        private $password = "System123";
        private $database = "techcode_database";

        public function Termination($TechID){
            $conn = new \mysqli($this->servername, $this->username, $this->password, $this->database);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "DELETE FROM `accounts` WHERE Tech_ID=?";
            $stmt = $conn->prepare($sql);

            $stmt->bind_param("s", $TechID);
            $stmt->execute();

            if ($stmt->affected_rows > 0) {
                http_response_code(200);
                echo json_encode(array("message" => "User successfully removed"));
                return json_encode(array("message" => "User successfully removed"));
            } else {
                if ($stmt->errno == 0) {
                    http_response_code(200);
                    echo json_encode(array("message" => "User was not removed, possibly no changes"));
                } else {
                    http_response_code(500);
                    echo json_encode(array("message" => "Database error occurred while updating user"));
                }
            }
            $stmt->close();
        }
    }

    //Server Setup
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

    //includes
    include "../MailingSystem/Mailer.php";

    // Get raw POST data
    $postdata = file_get_contents("php://input");

    $server = new ServerAccountTermination();

    if ($postdata) {
        $request = json_decode($postdata, true);

        if (isset($request["techId"])) {
            $TechID = $request["techId"];
            $email = $request["Email"];
            $username = $request["Gebruikersnaam"];

            $server->Termination($TechID);
            
            sendEmail($email, $username, "Accountrole termination");
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Invalid request, missing parameters"));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "No data received"));
    }

    $conn->close();
?>