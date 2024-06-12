<?php
    namespace Api;

    class ServerWorkersConnection {
        //DATABASE CONNECTION
        private $servername = "localhost";
        private $username = "TechCode_Systems";
        private $password = "System123";
        private $database = "techcode_database";

        public function WorkersConnection(){
            $conn = new \mysqli($this->servername, $this->username, $this->password, $this->database);
        
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
        
            $sql = "SELECT `Tech_ID`, `Gebruikersnaam`, `Voornaam`, `Achternaam`, `Geboortedatum`, `Email`, `Werkmail`, `Rol` FROM `accounts`";
            $stmt = $conn->prepare($sql);
        
            $stmt->execute();
        
            $result = $stmt->get_result();
        
            if ($result->num_rows > 0) {
                $responseData = array();
        
                while ($row = $result->fetch_assoc()) {
                    $responseData[] = array(
                        "message" => "Connection succesful",
                        "Tech_ID" => $row["Tech_ID"],
                        "Gebruikersnaam" => $row["Gebruikersnaam"],
                        "Voornaam" => $row["Voornaam"],
                        "Achternaam" => $row["Achternaam"],
                        "Geboortedatum" => $row["Geboortedatum"],
                        "Email" => $row["Email"],
                        "Werkmail" => $row["Werkmail"],
                        "Rol" => $row["Rol"]
                    );
                }
        
                $stmt->close();
                $conn->close();
        
                header('Content-Type: application/json');
                echo json_encode($responseData);
                return $responseData;
            } else {
                $stmt->close();
                $conn->close();
        
                http_response_code(401);
                echo json_encode(array("message" => "No records found"));
            }
        }
    }

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

    $server = new ServerWorkersConnection();
    $server->WorkersConnection();
?>
