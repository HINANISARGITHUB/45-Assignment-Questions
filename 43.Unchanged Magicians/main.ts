// Question #43: Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy
//  of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in
//  a separate array. Call show_magicians() with each array to show that you have one array of the original names and one
//  array with the Great added to each magician’s name.

let magician_names: string[] = ["M.Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];

function make_great(magicians: string[]) {
  return [...magicians];
}

let new_array = make_great(magician_names);

function great(magicians: string[]) {
  for(let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
  }
}
 great(new_array);

function show_magicians(magicians: string[]) {
  return magicians;
} 

console.log(show_magicians(magician_names));
console.log(show_magicians(new_array));


