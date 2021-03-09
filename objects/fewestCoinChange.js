/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @return {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
  let change = {};
  while(cents > 0){
    if(cents >= 25){
      cents -= 25;
      if(!change.hasOwnProperty("quarters")){
        change.quarters = 1;
      } else {
        change.quarters ++;
      }
    } else if(cents >= 10){
      cents -= 10;
      if(!change.hasOwnProperty("dimes")){
        change.dimes = 1;
      } else {
        change.dimes ++;
      }
    } else if(cents >= 5){
      cents -= 5;
      if(!change.hasOwnProperty("nickels")){
        change.nickels = 1;
      } else {
        change.nickels ++;
      }
    } else {
      cents -= 1;
      if(!change.hasOwnProperty("pennies")){
        change.pennies = 1;
      } else {
        change.pennies ++;
      }
    }
  }
  return change;
}



console.log(fewestCoinChange(25));
console.log(fewestCoinChange(50));
console.log(fewestCoinChange(9));
console.log(fewestCoinChange(99));