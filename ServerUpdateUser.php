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

        if(isset($request["username"]) && isset($request["password"])){
            $TechID = $request["TechID"];
            $username = $request["username"];
            $email = $request["email"];
            $phonenumber = $request["phonenumber"];
            $birthday = date('Y-m-d', strtotime($request["birthday"]));
            $firstname = $request["firstname"];
            $lastname = $request["lastname"];
            $country = $request["country"];
            $adress = $request["adres"];
            $delivercode = $request["delivercode"];

            $sql = "UPDATE `accounts` SET Gebruikersnaam=?, Voornaam=?, Achternaam=?, Geboortedatum=?, Email=?, Telefoonnummer=?, Land=?, Adres=?, Postcode=? WHERE Tech_ID=?";
            $stmt = $conn->prepare($sql);

            $stmt->bind_param("sssssssssss", $username, $firstname, $lastname, $birthday, $email, $phonenumber, $country, $adress, $delivercode, $TechID);
            $stmt->execute();

            if ($stmt->affected_rows > 0) {
                http_response_code(200);
                echo json_encode(array("message" => "User successful updated"));
            } else {
                http_response_code(401);
                echo json_encode(array("message" => "Updating user failed"));
            }

            $stmt->close();
            $conn->close();
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Invalid request"));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "No data received"));
    } 
?>