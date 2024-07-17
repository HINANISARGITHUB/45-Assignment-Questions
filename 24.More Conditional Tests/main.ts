// Quetion no. 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
//  comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in an array

// • Test whether an item is not in an array

let car: string = "Subaru";
let age: number = 31;
let array: number[] =[1, 2, 3, 4, 5];

// • Tests for equality with strings
console.log("Is car == 'Subaru'? I predict True");
console.log(car == 'Subaru'); 

console.log("Is car === 'subaru'? I predict False");
console.log(car === 'subaru');

// • Tests for Inequality with strings
console.log("Is car != 'Kia'? I predict True");
console.log(car != 'Kia');

console.log("Is car !== 'Subaru'? I predict False");
console.log(car !== 'Subaru');

// • Tests using the lower case function
console.log("Is car.toLowercase() == 'subaru'? I predict True");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car === car.toLowercase()? I predict False");
console.log(car === car.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// equality or inequality
console.log("Is age == 31 ? I predict True");
console.log(age == 31);

console.log("Is age != 31? I predict False");
console.log(age != 31);

// greaterthan or greaterthan equal to
console.log("Is age > 31 ? I predict false");
console.log(age > 31);

console.log("Is age >= 31 ? I predict True");
console.log(age >= 31);

// Lessthan or lessthan equal to
console.log("Is age < 31? I predict False");
console.log(age < 31);

console.log("Is age <= 31? I predict True");
console.log(age <= 31);

//  • Tests using "and" and "or" operators 
console.log("Is age > 32 || age < 33? I predict True"); // True ientifier 
console.log(age > 32 || age < 33);

console.log("Is age < 25 && age > 30 ? I predict False"); // false ientifier
console.log(age < 25 && age > 30);

// • Test whether an item is in an array
console.log("Is 3 in number? I predict True");  
console.log(3 in array);

// • Test whether an item is not in an array
console.log("Is 9 in number ? I predict False"); 
console.log(9 in array);




