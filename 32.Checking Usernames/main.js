"use strict";
// Question #31: Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
// current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that 
// the person will need to enter a new username. If a username has not been used, print a message saying that the username
//  is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Rayyan", "Safwan", "Zohan", "Hadi", "Ahad"];
let new_users = ["rayyan", "Fatima", "zohan", "Ayesha", "Faria"];
let lowerCase = [];
// for loop current_users
for (let j = 0; j < current_users.length; j++) {
    lowerCase.push(current_users[j].toLowerCase());
}
// for loop new_users
for (let i = 0; i < new_users.length; i++) {
    if (lowerCase.includes(new_users[i])) {
        console.log(`${new_users[i]} will need to enter a new username.`);
    }
    else {
        console.log(`${new_users[i]} is available.`);
    }
}
let current_users1 = ["Hadi", "Rayyan", "Safwan", "Zohan", "Hadi", "Ahmed"];
let new_users1 = ["hadi", "rayyan", "Fatima", "zohan", "Ayesha", "Faria"];
let lowerCase1 = [];
for (let j = 0; j < current_users1.length; j++) {
    lowerCase1.push(current_users1[j]);
}
for (let i = 0; i < new_users1.length; i++) {
    if (lowerCase.includes(new_users1[i])) {
        console.log(`${new_users1[i]} enter new name!`);
    }
    else {
        console.log(`${new_users1[i]} have already registered`);
    }
}
