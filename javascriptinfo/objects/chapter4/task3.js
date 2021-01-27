let ladder = {
	steps: 0,
	up() {
		this.steps++
		return this
	},
	down() {
		this.steps--
		return this
	},
	showSteps() {
		console.log(this.steps)
		return this
	},
}
console.log(ladder.steps)
// ladder.up().up().up().down().showSteps() //return this in the object methods to make chaining possible.
