function countSheeps(arrayOfSheep) {
	// TODO May the force be with you
	const presentSheep = arrayOfSheep.filter((sheep) => sheep === true)
	return presentSheep.length
}
