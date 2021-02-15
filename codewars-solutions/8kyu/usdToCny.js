function usdcny(usd) {
	let cny = 0
	for (let i = 1; i <= usd; i++) {
		cny += 6.75
	}
	return cny.toFixed(2) + ' Chinese Yuan'
}
