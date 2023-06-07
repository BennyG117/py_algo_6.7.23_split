/* 
    Acronyms

    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
    Do it with .split first if you need to, then try to do it without
    split MDN Document Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    Try to account for 'edge cases' in your function! Such as if we split the words and potentially get an empty string.
*/



const str1 = "object oriented programming";
const expected1 = "OOP";


// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */

//! Ben
function acronymize(str) {
    const words = str.split(' '); // array of every word separated by a space
    let acronym = ' ';

    for (let i = 0; i < words.length; i++) {  //loop through array
        if (words[i].length > 0)  //checks length of the word @ index of i
        acronym += words[i][0].toUpperCase(); //creates the acronym 1 letter at a time
    }
    return acronym;
}

console.log(acronymize(str1));
console.log(acronymize(str2));
console.log(acronymize(str3));
console.log(acronymize(str4));

//!Austin
// function Selector(str) {
//     const words = str.split(" ");
//     let x = "";
//     for (let word of words) {
//         if (word.length > 0) {
//             x += word[0].toUpperCase();
//         }
//     }
//     return x
// }
// console.log(Selector(str3));


//!Andrew
// function acronymize(str) {
//     let newStr = str.split(" ");
//     let ACRO = [];
//     for (let i = 0; i < newStr.length; i++) {
//         console.log("newStr[i] - ", newStr[i]);
//         ACRO.push(newStr[i].charAt(0));
//         console.log("ACRO - ", ACRO);
//         let string = ACRO.toString();
//         let newString = string.split(",").join("");
//         console.log("string", string);
//         console.log("newString", newString);
//     }
// }
// acronymize(str1);
// acronymize(str2);
// acronymize(str3);
// acronymize(str4);

/*****************************************************************************/