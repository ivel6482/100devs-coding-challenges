function feast(beast, dish) {
	//your function here
	const feastFirstLetter = beast[0]
	const feastLastLetter = beast[beast.length - 1]
	const dishFirstLetter = dish[0]
	const dishLastLetter = dish[dish.length - 1]

	if (
		feastFirstLetter === dishFirstLetter &&
		feastLastLetter === dishLastLetter
	) {
		return true
	} else {
		return false
	}
}
