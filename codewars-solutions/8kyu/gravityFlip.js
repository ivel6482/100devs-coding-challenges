const flip = (d, a) => {
	console.log('Orignal: ', d, a)
	//TODO
	if (d === 'L') {
		return a.sort((a, b) => (a < b ? 1 : -1))
	} else if (d === 'R') {
		return a.sort((a, b) => (a > b ? 1 : -1))
	}
}
