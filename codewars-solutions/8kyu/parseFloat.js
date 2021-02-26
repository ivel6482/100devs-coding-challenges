function parseF(s) {
	switch (typeof s === 'number' ? +s : s) {
		case null:
		case undefined:
		case false:
		case true:
			return null

		case 0:
		case '0':
			return 0

		case s:
			return +s > 0 ? +s : null

		default:
			return 'Error'
	}
}
