<?php
    use PHPUnit\Framework\TestCase;
    use Api\ServerAccountTermination;

    class ServerTerminationTest extends TestCase {
        public function testTermination() {
            // Test credentials
            $testID = "69";

            $server = new ServerAccountTermination();

            $result = $server->Termination($testID);

            $this->assertNotNull($result);

            $this->assertEquals(200, $result["code"]);

            $this->assertEquals("User successfully removed", $result["message"]);
        }
    }
?>