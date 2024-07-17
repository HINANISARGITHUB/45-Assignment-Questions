// Question #22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make
//  one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before
//  closing the program.


let array: string[]= ["Hina", "Reena", "Humaira", "Maryam", "Anabia"];
console.log(array[5]);


let array1: string[]= ["Hina", "Reena", "Humaira", "Maryam", "Anabia", "Fatima"];
console.log(array1[5]);


/////////////////////////// another method ///////////////////////////////////////

let array2: (string | number) [] = ["HINA", 5, "Reena", "Humaira", 6, 8];
console.log(array2[5]);
