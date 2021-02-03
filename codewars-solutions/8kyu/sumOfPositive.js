function positiveSum(arr) {
	return arr.reduce((total, number) => (number > 0 ? total + number : total), 0)
}
