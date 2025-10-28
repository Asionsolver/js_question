// Simple function that takes two arguments and logs them to the console.
// function foo(x, y) {
//   console.log(x, y);
// }
// var a = 3;
// foo(a, a * 2);

// Passing More Arguments than Declared Parameters:
// function sumNumbers(a, b) {
//   console.log("Declared parameters:", a, b);
//   console.log("Arguments object:", arguments);
// //   return a + b + arguments[2] + arguments[3];
//   return a + b ;
// }

// console.log(sumNumbers(1, 2, 3, 4));

// Passing Fewer Arguments than Declared Parameters: 
function sumNumbers(a, b) {
    console.log('Declared parameters:', a, b);
    return a + b;
  }
  
  console.log(sumNumbers(1)); 