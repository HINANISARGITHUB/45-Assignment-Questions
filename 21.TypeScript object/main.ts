// Question #21: They think of something you could store in a TypeScript Object. Write a program that creates Objects 
// containing these items.


// interface bhi use karskhtay h sirf type ki jaga interface or = ka sign nahi lagay ga.
// interface identification{}

type identification = {
    name: string;
    age: number;
    rollnumber: number;
    grade: string;
}

let student1: identification = {
    name: "Rayyan",
    age: 12,
    rollnumber: 74123,
    grade: "A+",
}


let student2: identification = {
    name: "Safwan",
    age: 11,
    rollnumber: 96321,
    grade: "A",
}

console.log(`Student1 name is ${student1.name}, his age is ${student1.age}, class rollnumber is ${student1.rollnumber} and he acheived ${student1.grade} grade.`)
console.log(`Student2 name is ${student2.name}, his age is ${student2.age}, class rollnumber is ${student2.rollnumber} and he acheived ${student2.grade} grade.`)
