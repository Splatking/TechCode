<?php
    use PHPUnit\Framework\TestCase;
    use Api\Calculator;
    
    class CalculatorTest extends TestCase {
        public function testAdd() {
            $calculator = new Calculator();
            $result = $calculator->Add(20, 5);
    
            $this->assertEquals(25, $result);
        }
    }
?>