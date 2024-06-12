<?php
    use PHPUnit\Framework\TestCase;
    use Api\ServerLogin;
    
    class ServerLoginTest extends TestCase {
        public function testLogin() {
            // Test credentials
            $testUsername = "Splatking";
            $testPassword = "jip.2701";

            $server = new ServerLogin();

            $result = $server->Login($testUsername, $testPassword);

            $this->assertNotNull($result);

            $responseData = json_decode($result, true);

            $this->assertEquals("Login successful", $responseData["message"]);
        }
    }
?>