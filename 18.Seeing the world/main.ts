//18. Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



let places: string[] = ["Baku" , "Australia", "Dubai", "Europe", "China"];

// Print your array in its original order.  1
console.log("Original1: " + places);

// Print your array in alphabetical order without modifying the actual list.  2
console.log("Copy, Alphabetical Order: "  + [...places].sort()); 

// Show that your array is still in its original order by printing it.        3 
console.log("Original2: " + places);

// Print your array in reverse alphabetical order without changing the order of the original list.   4
console.log("Copy, Alphabetical reverse: " + [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.   5
console.log("Original3: " + places);

// Reverse the order of your list. Print the array to show that its order has changed.   6
console.log("Original4: " + places.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.   7
console.log("Original5: " + places.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.  8
console.log("Original6: " + places.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.  9
console.log("Original7: " + places.sort().reverse());

