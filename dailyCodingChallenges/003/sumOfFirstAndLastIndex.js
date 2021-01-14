// Daily challenge 003
// 2021-13-1

function sumOfFirstAndLastElement(arr) {
	const firstElement = arr[0]
	const lastIndex = arr.length - 1
	const lastElement = arr[lastIndex]

	console.log(firstElement + lastElement)
}

sumOfFirstAndLastElement([1, 2, 3, 4, 5])
