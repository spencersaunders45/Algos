/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @return {string} The given str decoded / expanded.
 */
function decodeStr(str) {
  var p1 = 0;
  var count = false;
  var numAdd = false;
  var charAdd = false;
  var char = "";
  var num = "";
  var decodedStr = "";
  while(p1 !== str.length+1){
    // controls toggels
    if(numAdd == true && isNaN(str[p1]) == true) {
      count = true;
      numAdd = false;
      charAdd = false;
      parseInt(num);
    }
    if(count == false && isNaN(str[p1]) == false) {
      numAdd = true;
      charAdd = false;
    }
    if(count == false && isNaN(str[p1]) == true) {
      charAdd = true;
      numAdd = false;
    }
    // adds to num
    if(numAdd === true){
      num += str[p1];
      p1++;
    }
    // adds to char
    if(charAdd === true){
      char += str[p1];
      p1++;
    }
    // adds characters to empty string num of times
    if(count === true){
      decodedStr += char;
      if(num == 1){
        num = "";
        count = false;
        char = "";
      }else{
        num --;
      }
    }
  }
  return decodedStr;
}

console.log(decodeStr(str1));