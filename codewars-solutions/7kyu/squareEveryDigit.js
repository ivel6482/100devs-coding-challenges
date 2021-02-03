function squareDigits(num) {
	//may the code be with you
	const stringDigits = [...num.toString()]

	let digits = []

	stringDigits.forEach((digit) => digits.push(Math.pow(Number(digit), 2)))

	return Number(digits.join('').replace(',', ''))
}
