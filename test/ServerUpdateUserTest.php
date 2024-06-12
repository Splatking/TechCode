<?php
    use PHPUnit\Framework\TestCase;
    use Api\ServerUpdateUser;

    class ServerUpdateUserTest extends TestCase {
        public function testRole() {
            // Test credentials
            $testTechID = "11";
            $testUsername = "TestCreation";
            $testEmail = "jipvoss@gmail.com";
            $TestDiscordID = null;
            $testPhonenumber = "610363190";
            $testBirthday = "2006-01-27";
            $testFirstname = "Jip";
            $testLastname = "Voss";
            $testPassword = "jip.2701";
            $testLand = null;
            $testAdress = null;
            $testDeliverCode = null;

            $server = new ServerUpdateUser();

            $result = $server->UpdateUser($testUsername, $TestDiscordID, $testFirstname, $testLand, $testBirthday, $testEmail, $testPhonenumber, $testLand, $testAdress, $testDeliverCode, $testTechID);

            $this->assertNotNull($result);
            $this->assertEquals("User successfully updated", $result["message"]);
        }
    }
?>