const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach((button) =>
	button.addEventListener('click', () => calculate(button.innerText))
)

function calculate(operation) {
	const firstNumber = Number(document.getElementById('firstNumber').value)

	const secondNumber = Number(document.getElementById('secondNumber').value)

	const result = document.querySelector('.result')

	const total = eval(`${firstNumber} ${operation} ${secondNumber}`)

	result.innerText = total
}
