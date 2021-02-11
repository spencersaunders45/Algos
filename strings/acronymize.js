/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
// const expected2 = "LFNYISN";

function convertString(str) {
  let acronym = "";
  let start = true;
  let space = false;
  for(let i = 0; i < str.length; i++) {
    if(start === true && str[i] !== " ") {
      acronym += str[i].toUpperCase();
      start = false;
    } else if(start === false && str[i] === " ") {
      space = true;
    } else if(space === true && str[i] !== " ") {
      acronym += str[i].toUpperCase();
      space = false;
    }
  }
  return acronym;
}

console.log(convertString(str1));

console.log(convertString(str2));