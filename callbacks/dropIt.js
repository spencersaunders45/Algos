/*
Input: arr, callback
Output: arr (with elements removed)
Remove every element in the array, starting from idx 0,
until the callback function returns true when passed the
iterated element.
Return an empty array if the callback never returns true
*/

const nums = [1, 4, 3, 6, 9, 15];

function callBack(arr, callback) {
    while(arr.length > 0) {
        if(arr[0] > callback) {
            return arr;
        }
        arr.splice(0, 1);
    }
    return arr;
}

console.log(callBack(nums, 5));

// callBack(nums, 5)
// should return [6, 9, 15]

// callBack(nums, 2)
// should return [4, 3, 6, 9, 15]

// callBack(nums, 20)
// should return []