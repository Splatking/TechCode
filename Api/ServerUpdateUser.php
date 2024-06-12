<?php
    namespace Api;

    class ServerUpdateUser {
        // DATABASE CONNECTION
        private $servername = "localhost";
        private $username = "TechCode_Systems";
        private $password = "System123";
        private $database = "techcode_database";

        public function UpdateUser($GivenUsernamen, $DiscordID, $firstname, $lastname, $birthday, $email, $phonenumber, $country, $adress, $delivercode, $TechID){
            $conn = new \mysqli($this->servername, $this->username, $this->password, $this->database);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "UPDATE `accounts` SET Gebruikersnaam=?, Discord_ID=?, Voornaam=?, Achternaam=?, Geboortedatum=?, Email=?, Telefoonnummer=?, Land=?, Adres=?, Postcode=? WHERE Tech_ID=?";
            $stmt = $conn->prepare($sql);

            $stmt->bind_param("sssssssssss", $GivenUsernamen, $DiscordID, $firstname, $lastname, $birthday, $email, $phonenumber, $country, $adress, $delivercode, $TechID);
            $stmt->execute();

            if ($stmt->affected_rows > 0) {
                http_response_code(200);
                echo json_encode(array("message" => "User successfully updated"));
                return array("message" => "User successfully updated");
            } else {
                if ($stmt->errno == 0) {
                    http_response_code(200);
                    echo json_encode(array("message" => "User was not updated, possibly no changes"));
                    return array("message" => "User successfully updated");
                } else {
                    http_response_code(500);
                    echo json_encode(array("message" => "Database error occurred while updating user"));
                }
            }
            $stmt->close();
            $conn->close();
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

    $server = new ServerUpdateUser();

    if($postdata) {
        $request = json_decode($postdata, true);

        if(isset($request["TechID"]) && isset($request["username"]) && isset($request["DiscordID"]) && isset($request["email"]) && isset($request["phonenumber"]) && isset($request["birthday"]) && isset($request["firstname"]) && isset($request["lastname"]) && isset($request["country"]) && isset($request["adres"]) && isset($request["delivercode"])) {
            $TechID = $request["TechID"];
            $username = $request["username"];
            $DiscordID = $request["DiscordID"];
            $email = $request["email"];
            $phonenumber = $request["phonenumber"];
            $birthday = date('Y-m-d', strtotime($request["birthday"]));
            $firstname = $request["firstname"];
            $lastname = $request["lastname"];
            $country = $request["country"];
            $adress = $request["adres"];
            $delivercode = $request["delivercode"];

            $server->UpdateUser($username, $DiscordID, $firstname, $lastname, $birthday, $email, $phonenumber, $country, $adress, $delivercode, $TechID);
            sendEmail($email, $username, "Account update");
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Invalid request, missing parameters"));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "No data received"));
    }
?>
