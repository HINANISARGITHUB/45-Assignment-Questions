"use strict";
// question no.3
let personName = "Eric";
console.log("Uppercase: ", personName.toLocaleUpperCase());
console.log("Lowercase: ", personName.toLocaleLowerCase());
console.log("Titlecase: ", personName.replace(/\bw/g, (c) => c.toUpperCase()));
// title wala method upper variable ko title karay ga us may jo bhi likha ho ga wo print karay ga.....
// example
let personName1 = "HinA";
console.log('Uppercase:', personName1.toLocaleUpperCase());
console.log('Lowercase:', personName1.toLocaleLowerCase());
let nam_e1 = personName1.slice(0, 1).toUpperCase();
let nam_e2 = personName1.slice(1).toLowerCase();
let add = nam_e1 + nam_e2;
console.log('Titlecase: ' + add);
