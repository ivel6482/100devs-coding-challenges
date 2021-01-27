function Calculator() {
	this.read = function () {
		const number1 = +prompt('first number')
		const number2 = +prompt('second number')
		this.number1 = number1
		this.number2 = number2
	}
	this.sum = function () {
		return this.number1 + this.number2
	}
	this.mul = function () {
		return this.number1 * this.number2
	}
}

const calculator = new Calculator()
calculator.read()
console.log('Sum=', calculator.sum())
console.log('Mul=', calculator.mul())
