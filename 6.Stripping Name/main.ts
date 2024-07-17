// Question #6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end 
// of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the
//  whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName: string =`\n\t Hina \t\n`;   //  \n (next line)  \t (4 words spaces)
console.log(personName);
let stripped: string =personName.trim();
console.log(stripped);


// example
let personName1: string = "\n\t Reena \t\n";
console.log(personName1);
let stripping: string = personName1.trim();
console.log(stripping);
