/* 
Write a code that every letter of the alphabet that the user enters (lowercase or uppercase does not matter), 
the names that start with that letter will be printed.
- Use the prompt
- If the user enters something other than alphabets, 
tell them to enter only alphabets with an alert, then show the prompt again.
- If the user enters more than one character, 
alert them to enter only one of the alphabets, then show the prompt again.
- if there was no name, print "nothing found"
*/

const names = [
  "Rhys",
  "Isabella",
  "Ariella",
  "Millie",
  "Olivia",
  "Lyla",
  "Gianna",
  "Everett",
  "Hudson",
  "Sienna",
  "Emerson",
  "Alice",
  "Sharon",
  "Isla",
  "Thea",
  "Alma",
  "Maverick",
  "Raya",
  "Jesse",
  "Zoey",
  "Amelia",
  "Xavier",
  "Andrea",
  "Liam",
  "Kieran",
  "Isha",
  "Akira",
  "Marcus",
  "Rohan",
  "Alana",
  "Skylar",
  "Dante",
  "Mae",
  "Sloane",
  "Elise",
  "Finley",
  "Savannah",
  "Everly",
  "Ayla",
  "Theo",
  "Kian",
  "Joseph",
  "Brielle",
  "Brian",
  "Skyler",
  "Myra",
  "Bailey",
  "Riley",
  "Ezekiel",
  "Rebecca",
  "Sage",
  "Rae",
  "Sasha",
  "Valerie",
  "Sean",
  "Brianna",
  "Elora",
  "Simon",
  "Leon",
  "Ivan",
  "Nia",
  "Noah",
  "Khadijah",
  "Vivian",
  "Mina",
  "Evan",
  "Ava",
  "Nolan",
  "James",
  "Jade",
  "Mika",
  "Chelsea",
  "Rory",
  "Natasha",
  "Nora",
  "Lennox",
  "Emery",
  "Wren",
  "Aiden",
  "Harlow",
  "Kyra",
  "Leilani",
  "Kayla",
  "Avery",
  "Zoe",
  "Lara",
  "Camila",
  "Alyssa",
  "Amira",
  "Alaina",
  "Shiloh",
  "Luna",
  "Camille",
  "Orion",
  "Hayden",
  "Rhea",
  "Emma",
  "Mateo",
  "Mya",
  "Yara",
  "Evie",
  "Asher",
  "Azariah",
  "Isabelle",
  "Aisha",
  "Arlo",
  "Charlotte",
  "Gemma",
  "Fiona",
  "Ellis",
  "Asa",
  "Skye",
  "Nico",
  "Reese",
  "Kyle",
  "Lachlan",
  "Aditya",
  "Marie",
  "Margot",
  "Lisa",
  "Cecilia",
  "Monica",
  "Aubrey",
  "Grace",
  "Noa",
  "Scarlett",
  "Miles",
  "Deborah",
  "Lena",
  "Oliver",
  "Anya",
  "Lily",
  "Elena",
  "Naomi",
];
//! Answer:

let word = prompt("Enter a character:");
word = word.toUpperCase();
while (word < "A" || word > "Z") {
  alert("Enter only alphabets");
  word = prompt("Enter a character:");
  word = word.toUpperCase();
}
while (word.length != 1) {
  alert("Enter only one of the alphabets");
  word = prompt("Enter a character:");
  word = word.toUpperCase();
}
let count = 0;
for (let i = 0; i < names.length; i++) {
  if (word == names[i][0]) {
    console.log(names[i]);
    count++;
  }
}
if (count == 0) {
  console.log("nothing found");
}
