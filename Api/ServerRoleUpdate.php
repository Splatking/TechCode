<?php
    namespace Api;

    class ServerRoleUpdate {
        // DATABASE CONNECTION
        private $servername = "localhost";
        private $username = "TechCode_Systems";
        private $password = "System123";
        private $database = "techcode_database";

        public function updateRole($TechID, $NewRole){
            $conn = new \mysqli($this->servername, $this->username, $this->password, $this->database);
            
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
        
            $sql = "UPDATE `accounts` SET Rol=? WHERE Tech_ID=?";
            $stmt = $conn->prepare($sql);
        
            $stmt->bind_param("ss", $NewRole, $TechID);
            $stmt->execute();
        
            if ($stmt->affected_rows > 0) {
                $response = array("message" => "User successfully updated");
                http_response_code(200);
            } else {
                if ($stmt->errno == 0) {
                    $response = array("message" => "User successfully updated");
                    http_response_code(200);
                } else {
                    $response = array("message" => "Database error occurred while updating user");
                    http_response_code(500);
                }
            }
            
            $stmt->close();
            $conn->close();
        
            return $response;
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

    $server = new ServerRoleUpdate();

    if ($postdata) {
        $request = json_decode($postdata, true);

        if (isset($request["techId"]) && isset($request["newRole"])) {
            $TechID = $request["techId"];
            $NewRole = $request["newRole"];
            $email = $request["Email"];
            $username = $request["Gebruikersnaam"];

            $server->updateRole($TechID, $NewRole);
            sendEmail($email, $username, "Accountrole update");
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Invalid request, missing parameters"));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "No data received"));
    }
?>