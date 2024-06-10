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

    $sql = "SELECT `Tech_ID`, `Gebruikersnaam`, `Voornaam`, `Achternaam`, `Geboortedatum`, `Email`, `Werkmail`, `Rol` FROM `accounts`";
    $stmt = $conn->prepare($sql);

    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $responseData = array();

        while ($row = $result->fetch_assoc()) {
            $responseData[] = array(
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

        header('Content-Type: application/json');
        echo json_encode($responseData);

        $stmt->close();
        $conn->close();
    } else {
        http_response_code(401);
        echo json_encode(array("message" => "No records found"));
    }
?>
