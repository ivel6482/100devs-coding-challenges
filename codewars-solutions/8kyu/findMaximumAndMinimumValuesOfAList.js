var min = function (list) {
	console.log('List: ', list)
	console.log('Spread: ', ...list)

	return Math.min(...list)
}

var max = function (list) {
	return Math.max(...list)
}
