function Accumulator(num) {
	this.value = num
	this.read = function () {
		const number = +prompt('Enter a number to add.')
		return (this.value += number)
	}
}

let accumulator = new Accumulator(1)

console.log(accumulator.read())
