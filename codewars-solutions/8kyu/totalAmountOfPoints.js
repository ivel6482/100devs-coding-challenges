function points(games) {
	// your code here
	return games.reduce((acc, game) => {
		const x = Number(game.charAt(0))
		const y = Number(game.charAt(2))
		if (x > y) {
			return (acc += 3)
		} else if (x < y) {
			return (acc += 0)
		} else {
			return (acc += 1)
		}
	}, 0)
}
