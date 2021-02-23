  
/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr = [2,5,3,5,3,2,3,5,2];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param   {Array<number>} nums
 * @return  {Array<number>} The given array after being sorted.
 */
function selectionSort(nums) {
  let p1 = 0;
  let p2 = 0;
  let min = nums[0];
  while(p1 < nums.length){
    // for loop finds the min value
    for(let i = p1; i < nums.length; i++){
      if(nums[i] < min){
        min = nums[i];
        p2 = i;
      }
    }
    // checks to see if the min value is the same as the current position. If not then they switch positions
    if(min !== nums[p1]){
      let temp = nums[p1];
      nums[p1] = nums[p2];
      nums[p2] = temp;
    }
    p1++;
    min = nums[p1];
  }
  return nums;
}

console.log(selectionSort(numsOrdered));
console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));
console.log(selectionSort(arr));