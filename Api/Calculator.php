<?php
    namespace Api;

    class Calculator {
        public function Add($num1, $num2){
            return $num1 + $num2;
        }

        public function Substract($num1, $num2){
            return $num1 - $num2;
        }

        public function Multiply($num1, $num2){
            return $num1 * $num2;
        }

        public function Divide($num1, $num2){
            return $num1 / $num2;
        }
    }
?>