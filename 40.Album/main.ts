// Question #40: Album: Write a function called make_album() that builds a Object describing a music album. The function
// should take in an artist name and an album title, and it should return a Object containing these two pieces of 
// information. Use the function to make three dictionaries representing different albums. Print each return value to 
// show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling 
// line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function 
// call that includes the number of tracks on an album.

function make_album(artistName: string, albumTitle: string) {
    return {artistName, albumTitle};
}

let album1 = make_album("Abida Parveen,", "(Yaar ko hamne ja ba ja dekha)");
let album2 = make_album("Nusrat Fateh Ali Khan,", "(Haq Ali)");
let album3 = make_album("Atif Aslam,", "(Jal pari)");

console.log(album1);
console.log(album2);
console.log(album3);

/////////////////// optional parameter ////////////////////
function make_album1(artistName: string, albumTitle: string, track?: number ) {
    return {artistName, albumTitle, track};

}

let a_lbum1 = make_album1("Abida Parveen,", "(Yaar ko hamne ja ba ja dekha)", 104 );
let a_lbum2 = make_album1("Nusrat Fateh Ali Khan,", "(Haq Ali)", 204);
let a_lbum3 = make_album1("Atif Aslam","(Jal pari)", 303 );

console.log(a_lbum1);
console.log(a_lbum2);
console.log(a_lbum3);

