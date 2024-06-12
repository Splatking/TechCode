<?php
    use PHPUnit\Framework\TestCase;
    use Api\ServerLogin;
    
    class ServerLoginTest extends TestCase {
        public function testLogin() {
            // Test credentials
            $testUsername = "Splatking";
            $testPassword = "jip.2701";
            $testTechID = "1";
            $testDiscordID = "740941964840796250";
    
            $server = new ServerLogin();
    
            //Test1
            $result = $server->Login($testUsername, $testPassword);
            $this->assertNotNull($result, "Login result should not be null");
            $responseData = json_decode($result, true);
            $this->assertEquals("Login successful", $responseData["message"]);

            //Test2
            $result = $server->CreationLogin($testTechID);
            $this->assertNotNull($result, "Login result should not be null");
            $responseData = json_decode($result, true);
            $this->assertEquals("Login successful", $responseData["message"]);

            //Test3
            $result = $server->BotLogin($testDiscordID);
            $this->assertNotNull($result, "Login result should not be null");
            $responseData = json_decode($result, true);
            $this->assertEquals("Login successful", $responseData["message"]);
        }
    }    
?>