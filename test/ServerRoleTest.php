<?php
    use PHPUnit\Framework\TestCase;
    use Api\ServerRoleTest;

    class ServerCreateTest extends TestCase {
        public function testCreate() {
            // Test credentials
            $testID = "69";
            $testRole = "[TA]Test Account";

            $server = new ServerRoleTest();

            $result = $server->updateRole($testID, $testRole);

            $this->assertNotNull($result);

            $this->assertEquals(200, $result["code"]);

            $this->assertEquals("User successfully updated", $result["message"]);
        }
    }
?>