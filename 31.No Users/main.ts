// Question #31: No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames: string[] = ["john", "peter", "admin", "calvin", "elon musk", "bill gates"];

if (userNames.length === 0) {
  console.log(" We need to find some users!");
}

else {
  userNames = [];
  console.log("All the user have been removed");
}
