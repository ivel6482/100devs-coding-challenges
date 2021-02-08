function findDifference(a, b) {
	//loading...
	const cuboidA = a.reduce((acc, num) => acc * num, 1)
	const cuboidB = b.reduce((acc, num) => acc * num, 1)
	return Math.abs(cuboidA - cuboidB)
}
