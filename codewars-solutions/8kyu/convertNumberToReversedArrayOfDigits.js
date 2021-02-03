function digitize(n) {
	//code here
	const string = n.toString()
	const array = string.split('')
	const reversed = array.reverse()
	const numbers = array.map((num) => Number(num))
	return numbers
}
