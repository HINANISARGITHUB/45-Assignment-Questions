/* Question no#: 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
 if statements that check for certain fruits in your array.*/

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in
//  your array, the if block should print a statement, such as You really like bananas!

let favoriteFruit: string[] = ["Apple","Banana","Orange"];

if (favoriteFruit.includes("Apple")){
    console.log("I really like Apple");
}

if (favoriteFruit.includes("Mango")){
    console.log("I really like Mango");
}

if (favoriteFruit.includes("Banana")){
    console.log("I really like Banana");
}

if (favoriteFruit.includes("Orange")){
    console.log("I really like Orange");
}

if (favoriteFruit.includes("Kiwi")){
    console.log("I really like Kiwi");
}
