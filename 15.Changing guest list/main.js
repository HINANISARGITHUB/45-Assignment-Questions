"use strict";
let guest_list = ['Rina', 'Humaira', 'Anabia', 'Maryam', 'Fatima', 'Ayzal'];
// for(let i = 0; i < guest_list.length; i++){
// console.log("Hi Dear " + guest_list[i] + ',\n I invite you on dinner on sunday.Please come it,s Pleasure for me. \n Thankyou \n');
// }
let Guestnot_present = 'Maryam';
let new_guest = 'Ayesha';
guest_list[3] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi Dear ${guest_list[i]}, \n I invite you on dinner on sunday.Please come it,s Pleasure for me. \n Thank You \n`);
}
console.log('Miss ' + Guestnot_present + ' will not come sunday dinner');
