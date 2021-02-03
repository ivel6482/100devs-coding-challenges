function squareSum(numbers) {
	let sum = 0

	numbers.forEach((number) => {
		sum += Math.pow(number, 2)
	})

	return sum
}
