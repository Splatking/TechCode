<?php
    use PHPUnit\Framework\TestCase;
    use Api\ServerWorkersConnection;

    class ServerWorkersConnectionTest extends TestCase {
        public function testWorkersConnection() {
            $server = new ServerWorkersConnection();
        
            $result = $server->WorkersConnection();
        
            $this->assertNotNull($result);
            $this->assertEquals("Connection succesful", $result[0]["message"]);

        }        
    }
?>