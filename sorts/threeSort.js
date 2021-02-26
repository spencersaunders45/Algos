//You're given two arrays. The first array is guaranteed to only contain integers that are in the second array, and the second array represents a desired order for the integers in the first array. 

const array1 = [1,0,0,-1,-1,0,1,1];
const order1 = [0,1,-1];
//output = [0,0,0,1,1,1,-1,-1]

const array2 = [7, 8, 9, 7, 8, 9, 9, 9, 9, 9, 9, 9];
const order2 = [8, 7, 9];
//output = [8,8,7,7,9,9,9,9,9,9,9,9]

const array3 = [0, 10, 10, 10, 10, 10, 25, 25, 25, 25, 25];
const order3 = [25, 10, 0];
//output = [25,25,25,25,25,10,10,10,10,10,0]

function threeNumberSort(array, order) {
  //goes through the whole array and switches all order items to the front of the array using the switch index
	let switchIdx = 0;
	for(let i = 0; i < array.length; i++){
		if(array[i] === order[0]){
			[array[i], array[switchIdx]] = [array[switchIdx], array[i]];
			switchIdx++;
		}
	}
  //goes through the whole array and switches all order items after the first ordered items using the same switch index
	for(let i = 0; i < array.length; i++){
		if(array[i] === order[1]){
			[array[i], array[switchIdx]] = [array[switchIdx], array[i]];
			switchIdx++;
		}
	}
	return array;
}

console.log(threeNumberSort(array1, order1));
console.log(threeNumberSort(array2, order2));
console.log(threeNumberSort(array3, order3));