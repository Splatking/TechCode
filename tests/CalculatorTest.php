<?php
    use PHPUnit\Framework\TestCase;
    use Api\Calculator;
    
    class CalculatorTest extends TestCase {
        public function testAdd() {
            $calculator = new Calculator();
            $result = $calculator->Add(20, 5);
    
            $this->assertEquals(25, $result);
        }

        public function testSubstraction() {
            $calculator = new Calculator();
            $result = $calculator->Substract(20, 5);
    
            $this->assertEquals(15, $result);
        }

        public function testMultiply() {
            $calculator = new Calculator();
            $result = $calculator->Multiply(20, 5);
    
            $this->assertEquals(100, $result);
        }

        public function testDivide() {
            $calculator = new Calculator();
            $result = $calculator->Divide(20, 5);
    
            $this->assertEquals(4, $result);
        }
    }
?>