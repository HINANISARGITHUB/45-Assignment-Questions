// Question #41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
let magician_name = ["M.Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];
function show_magicians(magician_name) {
    for (let i = 0; i < magician_name.length; i++) {
        console.log(magician_name[i]);
    }
}
show_magicians(magician_name);
/////////////////////////////////////////////////// 2nd method
let magician_name1 = ["M.Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];
function show_magicians1(magician_name1) {
    magician_name1.forEach(magician_name1 => {
        console.log(magician_name1);
    });
}
show_magicians(magician_name1);
//////////////////
let array = ["Rayyan", "Zohan", "Anabis"];
function person(array) {
    array.forEach(array => {
        console.log(array);
    });
}
person(array);
export {};
