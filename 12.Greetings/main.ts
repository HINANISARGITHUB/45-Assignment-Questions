// Question #12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be personalized with the
//  person’s name.

let friends_name: string[] = ["Hina", "Reena", "Humaira"];
console.log(friends_name[0]  , "Celebrate every win, no matter how small.");
console.log(friends_name[1]  , "Celebrate every win, no matter how small.");
console.log(friends_name[2]  , "Celebrate every win, no matter how small.");


// example
let members: string[] =['Rayyan', 'Safwan', 'Zohan', 'Maryam', 'Anabia', 'Ayzal Fatima', 'Ayesha Zehra'];
let message ="Do you want to eat chocalate";
for(let i=0; i < members.length; i++){
    console.log(members[i] + " " + message);
}

