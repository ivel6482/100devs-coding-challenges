function XO(str) {
	//code here
	const formattedString = str.toLowerCase()
	const xTimes =
		formattedString.match(/x/gi) === null ? '' : formattedString.match(/x/gi)
	const oTimes =
		formattedString.match(/o/gi) === null ? '' : formattedString.match(/o/gi)

	if (xTimes.length === oTimes.length) {
		return true
	} else if (xTimes === null || oTimes === null) {
		return false
	} else if (xTimes === null && oTimes === null) {
		return true
	} else {
		return false
	}
}
