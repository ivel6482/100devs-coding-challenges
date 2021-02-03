function sumArray(array) {
	const checkArray = array === null ? [] : array

	if (checkArray.length === 0 || checkArray.length === 1) {
		return 0
	} else {
		const sortedArray = checkArray.sort((a, b) => {
			if (a > b) {
				return 1
			} else {
				return -1
			}
		})

		sortedArray.splice(0, 1)
		sortedArray.splice(sortedArray.length - 1, 1)

		return sortedArray.length > 0
			? sortedArray.reduce((total, number) => total + number)
			: 0
	}
}
