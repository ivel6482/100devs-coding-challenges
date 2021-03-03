String.prototype.toAlternatingCase = function () {
	// Define your method here :)
	const arr = []
	for (let i = 0; i < this.length; i++) {
		if (this[i] === this[i].toUpperCase()) {
			arr.push(this[i].toLowerCase())
		} else {
			arr.push(this[i].toUpperCase())
		}
	}
	return arr.join('')
}
