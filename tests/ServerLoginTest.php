<?php
    use PHPUnit\Framework\TestCase;
    use Api\ServerLogin;
    
    class ServerLoginTest extends TestCase {
        public function testLogin() {
            // Test credentials
            $testUsername = "Splatking";
            $testPassword = "jip.2701";

            // Instantiate ServerLogin class
            $server = new ServerLogin();

            // Call the login method with test credentials
            $result = $server->Login($testUsername, $testPassword);

            // Check if the result is not null
            $this->assertNotNull($result);

            // Parse the JSON response
            $responseData = json_decode($result, true);

            // Check if the response contains the expected success message
            $this->assertEquals("Login successful", $responseData["message"]);
        }
    }
?>