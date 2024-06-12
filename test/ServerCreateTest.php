<?php
    use PHPUnit\Framework\TestCase;
    use Api\ServerCreate;

    class ServerCreateTest extends TestCase {
        public function testCreate() {
            // Test credentials
            $testUsername = "TestCreation";
            $testEmail = "jipvoss@gmail.com";
            $testPhonenumber = "610363190";
            $testBirthday = "2006-01-27";
            $testFirstname = "Jip";
            $testLastname = "Voss";
            $testPassword = "jip.2701";

            $server = new ServerCreate();

            $result = $server->Create($testUsername, $testEmail, $testPhonenumber, $testBirthday, $testFirstname, $testLastname, $testPassword);

            $this->assertNotNull($result);

            $this->assertEquals(200, $result["code"]);

            $this->assertEquals("Registration successful", $result["message"]);
        }
    }
?>