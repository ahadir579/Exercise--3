"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Ali haider Phull";
// step 1 Lower case:
let lowercaseName = personName.toLowerCase();
// step 2 upper case;
let uppercaseName = personName.toUpperCase();
console.log(lowercaseName);
console.log(uppercaseName);
// step 3 title case
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
