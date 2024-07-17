// Question #42: Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
//  that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to
//  see that the list has actually been modified.

let magician_names: string[] = ["M.Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];

function make_great1(magician_name1: string[]) {
   
    for(let i = 0; i < magician_name1.length; i++){
        magician_name1[i] = "The Great " +  magician_name1[i];
    }
}

function show_magicians() {
    for(let great of magician_names) {
        console.log(great);
    }
}

make_great1(magician_names);
show_magicians();

///////////////////////////////// 2nd method ///////////////////////////

let magician_name: string[] = ["M.Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];

function make_great(magicians: string[]) {
   
    for(let i = 0; i < magicians.length; i++){
      console.log("Great " + magicians[i]);
    }   
}

make_great(magician_name);



