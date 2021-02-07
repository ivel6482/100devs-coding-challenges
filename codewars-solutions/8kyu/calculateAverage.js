function find_average(array) {
	// your code here
	return array.reduce((acc, num) => acc + num, 0) / array.length
}
