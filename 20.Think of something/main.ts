// Question #20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
// countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


let languages: string[] = ["Urdu","Sindhi", "Panjabi", "Saraiki", "Balochi"];
console.log("List of Languages");

console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);
console.log(languages[3]);
console.log(languages[4]);

///////////////////////////////// another method ////////////////////////////

let languages1: string[] = ["Urdu","Sindhi", "Panjabi", "Saraiki", "Balochi"];
console.log("\nList of Languages by another method");

for(let top of languages1){
    console.log(top);
}