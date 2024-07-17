"use strict";
// Question no.23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and
// your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test # 1 Equality == camparision operator
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True."); // 1  Ttue  
console.log(car == 'subaru');
// Test # 2 Exact data type === Equality camparision operator
console.log("Is car === 'subaru'? I predict true."); //2 True
console.log(car === 'subaru');
// Test # 3 Exact data type === Equality camparision operator
console.log("Is car === 'civic'? I predict false."); //1 False
console.log(car === 'civic');
// Test # 4 Not Equal != camparision operator
console.log("Is car != 'subaru'? I predict false."); // 2 False
console.log(car != 'subaru');
// Test # 5 strictly in equality !== camparision operator
console.log("Is car !== 'subaru'? I predict false."); // 3 False
console.log(car !== 'subaru');
// Test # 6 strictly in equality !== camparision operator
console.log("Is car !== 'Toyota'? I predict true."); // 3 True
console.log(car !== 'Toyota');
// Test # 7 greatherthan > camparision operator
console.log("Is car > 'subaru'? I predict false."); // 4 False
console.log(car > 'subaru');
// Test # 8 lessthan camparision operator
console.log("Is car < 'subaru'? I predict false."); // 5 False
console.log(car < 'subaru');
// Test # 9 greatrethan or equal camparision operator
console.log("Is car >= 'subaru'? I predict True."); // 4 True
console.log(car >= 'subaru');
// Test # 10 lessthan or equal camparision operator
console.log("Is car <= 'subaru'? I predict True."); // 5 True
console.log(car <= 'subaru');
