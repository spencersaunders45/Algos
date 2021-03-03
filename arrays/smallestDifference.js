//Function takes in two non-empty arrays of integers and finds a pair of numbers(one from each array) whose absolute difference is closest to zero
//and returns an array containing those two numbers with the number from the first array in the first position

function smallestDifference(arrayOne, arrayTwo) {
  // idx1 will increase when idx2 has cycled through the second array
	let idx1 = 0;
	let idx2 = 0;
	let minDiff = Number.MAX_SAFE_INTEGER;
	let temp = null;
	let minDiffArr = [];
	while(idx1 < arrayOne.length){
		//increase idx1 when idx2 has gone through the array and resets idx2
		if(idx2 >= arrayTwo.length){
			idx1++;
			idx2 = 0;
		}
		//returns array if the numbers are the same
		if(arrayOne[idx1] === arrayTwo[idx2]){
			minDiffArr = [arrayOne[idx1], arrayTwo[idx2]];
			return minDiffArr;
		}
		//sets the temp if both numbers are positive
		if(arrayOne[idx1] >= 0 && arrayTwo[idx2] >= 0 && arrayOne[idx1] > arrayTwo[idx2]){
			temp = arrayOne[idx1] - arrayTwo[idx2];
		} else if(arrayOne[idx1] >= 0 && arrayTwo[idx2] >= 0 && arrayOne[idx1] < arrayTwo[idx2]) {
			temp = arrayTwo[idx2] - arrayOne[idx1];
		}
		//sets the temp for one positve and one negative number
		if(arrayOne[idx1] >= 0 && arrayTwo[idx2] <= 0){
			temp = arrayOne[idx1] - arrayTwo[idx2];
		} else if(arrayOne[idx1] <= 0 && arrayTwo[idx2] >= 0){
			temp = arrayTwo[idx2] - arrayOne[idx1];
		}
		//sets the temp if both numbers are negative
		if(arrayOne[idx1] <= 0 && arrayTwo[idx2] <= 0 && arrayOne[idx1] > arrayTwo[idx2]){
			temp = -(arrayTwo[idx2]) + arrayOne[idx1];
		} else if(arrayOne[idx1] <= 0 && arrayTwo[idx2] <= 0 && arrayOne[idx1] < arrayTwo[idx2]){
			temp = -(arrayOne[idx1]) + arrayTwo[idx2];
		}
		//sets the minDiff
		if(temp < minDiff){
			minDiffArr = [arrayOne[idx1], arrayTwo[idx2]];
			minDiff = temp;
			temp = null;
		}
			
		idx2++;
	}
	return minDiffArr;
}

console.log(smallestDifference([-1,5,10,20,28,3], [26,134,135,15,17])); //[28,26]
console.log(smallestDifference([-1,5,10,20,3], [26,134,135,15,17])); //[20,17]
console.log(smallestDifference([10,0,20,25], [1005,1006,1014,1032,1031])); //[25, 1005];
console.log(smallestDifference([240,124,86,111,2,84,954,27,89], [1,3,954,19,8])); //[954,954]