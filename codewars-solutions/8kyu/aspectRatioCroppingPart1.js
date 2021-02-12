function aspectRatio(x, y) {
	let newX = 0
	for (let i = 1; i <= y; i++) {
		newX += 16 / 9
	}

	if (newX.toString().split('.')[1].split('')[0] > 0) {
		return [Math.ceil(newX), y]
	} else {
		return [Math.round(newX), y]
	}
}
