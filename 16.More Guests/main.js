"use strict";
// Question no. 14
let guest_list = ['Rina', 'Humaira', 'Anabia', 'Maryam', 'Fatima', 'Ayzal'];
// for(let i = 0; i < guest_list.length; i++){
// console.log("Hi Dear " + guest_list[i] + ',\n I invite you on dinner on sunday.Please come it,s Pleasure for me. \n Thankyou \n');
// }
// Question no. 15
let Guestnot_present = 'Maryam';
let new_guest = 'Ayesha';
guest_list[3] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi Dear ${guest_list[i]}, \n I invite you on dinner on sunday.Please come it,s Pleasure for me. \n Thank You \n`);
}
console.log('Miss ' + Guestnot_present + ' will not come sunday dinner');
// Question no. 16
guest_list.unshift('Rafia');
guest_list.splice(3, 0, 'Salma');
guest_list.push('Zainab');
for (let i = 0; i < guest_list.length; i++) {
    console.log(`\n Hi Dear, ${guest_list[i]}, \n i have got found a bigger dinner table  so i invited more guests. Please come on dinner on sunday it,s Pleasure for me. \n Thank You \n`);
}
