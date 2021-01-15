// Daily challenge 005
// 2021-15-1
// Challenge: Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers.

function oddNumbersArray(arr) {
	let oddNumbers = []
	arr.forEach((num) => {
		if (num % 2 !== 0) {
			oddNumbers.push(num)
		}
	})
	console.log(oddNumbers)
}

oddNumbersArray([1, 2, 3, 4, 5])
