const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
	button.addEventListener('click', getValueFromButtons)
})

// Refactor the document.querySelector calls.
const calculator = {
	read(e) {
		return (document.querySelector('p').innerText += e.target.value)
	},
	compute() {
		return (document.querySelector('p').innerText = eval(
			document.querySelector('p').innerText
		))
	},
	reset() {
		return (document.querySelector('p').innerText = '')
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
