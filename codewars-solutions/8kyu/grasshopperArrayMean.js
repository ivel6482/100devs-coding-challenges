var findAverage = function (nums) {
	// Code here
	const sum = nums.reduce((acc, num) => num + acc, 0)
	return sum / nums.length
}
