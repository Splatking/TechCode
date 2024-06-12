<?php
    use PHPUnit\Framework\TestCase;
    use Api\ServerRoleUpdate;

    class ServerRoleTest extends TestCase {
        public function testRole() {
            // Test credentials
            $testID = "69";
            $testRole = "[TA]Test Account";

            $server = new ServerRoleUpdate();

            $result = $server->updateRole($testID, $testRole);

            $this->assertNotNull($result);
            $this->assertEquals("User successfully updated", $result["message"]);
        }
    }
?>