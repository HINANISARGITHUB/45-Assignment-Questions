// Question #13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make
//  a list that stores several examples. Use your list to print a series of statements about these items, such as “I would
//  like to own a Honda motorcycle.”

let transportation: string[] = ['BMW' , 'Mercedes' , 'Bugatti' , 'ferrari' , 'Kia'];
let message: string = "I would like to own a "
for(let i = 0; i < transportation.length; i++){
    console.log(message + transportation[i])
}

// example 2
let transportations: string[] = ['BMW' , 'Mercedes' , 'Bugatti' , 'ferrari' , 'Kia'];
console.log("I would like to own a " + transportations[1]);
