// question #17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two
//  people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
//  your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have
//  an empty list at the end of your program.


let guest_list: string[] =['Rina','Humaira','Anabia','Maryam','Fatima','Ayzal'];
// for(let i = 0; i < guest_list.length; i++){
    // console.log("Hi Dear " + guest_list[i] + ',\n I invite you on dinner on sunday.Please come it,s Pleasure for me. \n Thankyou \n');
// }

// Question no. 15
let Guestnot_present: string = 'Maryam';
let new_guest: string = 'Ayesha';
guest_list[3] = new_guest;

// for(let i = 0; i < guest_list.length; i++){
    // console.log(`Hi Dear ${guest_list[i]}, \n I invite you on dinner on sunday.Please come it,s Pleasure for me. \n Thank You \n`);
// }

//console.log('Miss ' + Guestnot_present + ' will not come sunday dinner');

// Question no. 16
guest_list.unshift('Rafia');
guest_list.splice(3, 0 , 'Salma');
guest_list.push('Zainab');

// for(let i = 0; i < guest_list.length; i++){
    // console.log(`Hi Dear, ${guest_list[i]}, \n i have got found a bigger dinner table  so i invited more guests. Please come on dinner on sunday it,s Pleasure for me. \n Thank You \n`);
// }

// Question no. 17
console.log(`Unfortunately i can,t arrange big table  and I have spaces for only two person`);
while(guest_list.length > 2){
    let remove_Guests = guest_list.pop();
    console.log(`Sorry friends ${remove_Guests} you are not invited on sunday dinner`);
}
for(let i = 0; i < guest_list.length; i++){
    console.log(`\n Dear friend ${guest_list[i]}, \n you are still invited on sunday dinner.Please come it,s pleasure for me. \n Thank you \n `);
}
guest_list.splice(0, 2);
console.log(guest_list);


