function parseF(s) {
	console.log('Initial value: ', s)
	switch (typeof s === 'number' ? +s : s) {
		case null:
			console.log('Ran case 1')
			return null

		case false:
			console.log('Ran case 2')
			return null

		case true:
			return null

		case undefined:
			return null

		case 0:
			return 0

		case '0':
			return 0

		case s:
			return +s > 0 ? +s : null

		default:
			return 'Error'
	}
	// return +formattedNumber.toFixed(1) === formattedNumber ? Number(`${formattedNumber}.0`) : +formattedNumber.toFixed(1);
}
