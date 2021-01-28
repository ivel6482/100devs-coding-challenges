const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
	button.addEventListener('click', getValueFromButtons)
})

const calculator = {
	screen: document.querySelector('p'),
	read(e) {
		return (this.screen.innerText += e.target.value)
	},
	compute() {
		return (this.screen.innerText = eval(this.screen.innerText))
	},
	reset() {
		return (this.screen.innerText = '')
	},
}

function getValueFromButtons(e) {
	e.preventDefault()
	e.target.name === 'clear' && calculator.reset()
	e.target.value === '=' ? calculator.compute() : calculator.read(e)
}

/*
	const screen = document.querySelector('p')
	e.target.value === '='
		? (screen.innerText = eval(screen.innerText))
    : (screen.innerText += e.target.value)
*/
