// Question #35: Animals: Think of at least three different animals that have a common characteristic. Store the names 
// of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to
// print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program 
// stating what these animals have in common. You could print a sentence such as Any of these animals would make a great
//  pet!

let myAnimals: string[] = ["Parrot", "Dog", "Cat",];

for(let i = 0; i < myAnimals.length; i++) {
    console.log(`${myAnimals[i]}`);
}

for(let i = 0; i < myAnimals.length; i++) {
    console.log(`A ${myAnimals[i]} would make agreat pet.`);
}

console.log("\nParrot would make a great pet! They are highly intelligent, social, and can form strong bonds with their owners.");