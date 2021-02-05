function invert(array) {
	if (array.length > 0) {
		return array.map((n) => (n > 0 ? -Math.abs(n) : Math.abs(n)))
	} else if (array[0] === 0) {
		return array
	} else {
		return []
	}
}
