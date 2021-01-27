let calculator = {
	read() {
		const value1 = Number(prompt('Enter first value'))
		const value2 = Number(prompt('Enter second value'))
		this.value1 = value1
		this.value2 = value2
	},
	sum() {
		return this.value1 + this.value2
	},
	mul() {
		return this.value1 * this.value2
	},
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
