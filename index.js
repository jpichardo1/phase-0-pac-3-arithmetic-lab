1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2
function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

function add(a, b) {
    return a + b;
}
console.logadd(a, b)

function subtract(a, b) {
    return a - b;
}
console.logsubtract(a, b)

function multiply(a, b) {
    return a * b;
}
console.logmultiply(a, b)

function divide(a, b) {
    return a / b;
}
console.logdivide(a, b)

function increment(n) {
    return n + 1;
  }
  
  let number = 5;
  let result = increment(number);
  
  console.log(result); //=> 6

function decrement(n) {
    return n - 1;
  }
 decrement(number);
  
  console.log(result); //=> 4

//reset number
  number = 10;
 
  function makeInt(n){
    return parseInt(n, 10)

  }

  function add5() {
    return (number += 5);
  }
  
  function divideBy3() {
    return (number /= 3);
  }
  
  divideBy3(); //=> 3.3333333333333335
  
  add5(); //=> 8.333333333333334
  
  number = 10;
  
  add5(); //=> 15
  
  divideBy3(); //=> 5

  console.logmakeInt(n)

  function preserveDecimal(n) {
    return parseFloat(n);
  }
  parseInt("2.2222", 10);
  parseFloat("2.2222"); // returns 2.2222

  console.log(preserveDecimal("2.2222"));
console.log(preserveDecimal(2.2222));