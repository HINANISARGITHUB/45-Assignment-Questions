// Question no. 14
let guest_list: string[] =['Rina','Humaira','Anabia','Maryam','Fatima','Ayzal'];
 for(let i = 0; i < guest_list.length; i++){
     console.log("Hi Dear " + guest_list[i] + ',\n I invite you on dinner on sunday.Please come it,s Pleasure for me. \n Thankyou \n');
 }

//  Question #15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
//  out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the 
// guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let Guestnot_present: string = 'Maryam';
let new_guest: string = 'Ayesha';
guest_list[3] = new_guest;

for(let i = 0; i < guest_list.length; i++){
    console.log(`Hi Dear ${guest_list[i]}, \n I invite you on dinner on sunday.Please come it,s Pleasure for me. \n Thank You \n`);
}

console.log('Miss ' + Guestnot_present + ' will not come sunday dinner');
