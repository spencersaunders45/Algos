//Function returns all triplets in the array that add up to the target sum and return it in a two dimensional
//array of all the triples. The numbers in each triplet should be in ascending order and the triplets themselves
//should be ordered in ascending order

function threeNumberSum(array, targetSum) {
	//first sort the array with selection sort
	//then loop through all possibilites
	let returnArray = [];
	let tempArray = [];
	let idx = 0;
	while(idx < array.length-1){
		//Find min where min value is located
		let minIdx = idx;
		for(let i = idx+1; i < array.length; i++){
			if(array[i] < array[minIdx]){
				minIdx = i;
			}
		}
		//swap min value with curent index
		[array[idx], array[minIdx]] = [array[minIdx], array[idx]];
		
		idx++;
	}
	//have three pointers that check all possible sums in the array
	//once idx3 has run through the array idx2 will increase by one
	//once idx2 has run through the array idx1 will increase by one
	//once idx1 has run through the array the loop will end and return the array
	let idx1 = 0;
	let idx2 = 1;
	let idx3 = 2;
	while(idx1 < array.length-1){
		if(idx2 >= array.length-1){
			idx1++;
			idx2 = idx1+1;
			idx3 = idx2+1;
		}
		if(idx3 >= array.length){
			idx2++;
			idx3 = idx2+1;
		}
		if((array[idx1] + array[idx2] + array[idx3]) === targetSum){
			tempArray.push(array[idx1]);
			tempArray.push(array[idx2]);
			tempArray.push(array[idx3]);
			returnArray.push(tempArray);
			tempArray = [];
		}
		
		idx3++;
	}
	
	return returnArray;
}

console.log(threeNumberSum([12,3,1,2,-6,5,-8,6], 0));
console.log(threeNumberSum([8,10,-2,49,14], 57));
console.log(threeNumberSum([12,3,1,2,-6,5,0,-8,-1], 0));
console.log(threeNumberSum([12,3,1,2,-6,5,0,-8,-1,6,-5], 0));
console.log(threeNumberSum([1,2,3,4,5,6,7,8,9,15], 18));
console.log(threeNumberSum([1,2,3,4,5,6,7,8,9,15], 32));
console.log(threeNumberSum([1,2,3,4,5,6,7,8,9,15], 33));
console.log(threeNumberSum([1,2,3,4,5,6,7,8,9,15], 5));