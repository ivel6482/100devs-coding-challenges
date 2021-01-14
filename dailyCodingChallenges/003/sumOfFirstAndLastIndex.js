// Daily challenge 003
// 2021-13-1
// Challenge: Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array.

function sumOfFirstAndLastElement(arr) {
	const firstElement = arr[0]
	const lastIndex = arr.length - 1
	const lastElement = arr[lastIndex]

	console.log(firstElement + lastElement)
}

sumOfFirstAndLastElement([1, 2, 3, 4, 5])
