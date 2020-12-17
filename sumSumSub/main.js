// Coding challenge #3
// Class #12
// Date: 2020-12-16
// Description: Create a function that takes three numbers and multiplies the first two then subtract by the third number

document.querySelector('button').addEventListener('click', calculate)

function calculate(e) {
	e.preventDefault()
	const firstName = document.querySelector('#firstNumber').value
	const secondNumber = document.querySelector('#secondNumber').value
	const thirdNumber = document.querySelector('#thirdNumber').value
	const result = document.querySelector('#result')

	const total = firstName * secondNumber - thirdNumber
	console.log(total)

	result.innerText = total
}
