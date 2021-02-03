function findNextSquare(sq) {
	// Return the next square if sq is a perfect square, -1 otherwise
	const squareRoot = Math.floor(Math.sqrt(sq))
	const isPerfect = sq === squareRoot * squareRoot ? true : false

	if (isPerfect) {
		return (squareRoot + 1) * (squareRoot + 1)
	}

	return -1
}
