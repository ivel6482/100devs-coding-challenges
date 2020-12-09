//==============================================
// Coding challenge #1
// Class #10
// Date: 2020-12-9
// Description: Fahrenheit to Celsius Converter
//==============================================

//change the input color if its hot or cold for F
//change background color based on temp
//change font color based on temp
// document.getElementById('fahrenheit').addEventListener('keyup', changeStyles)
document.querySelector('button').addEventListener('click', convertToCelsius)

// function changeStyles() {
// 	// ISSUES:
// 	//does not detect negative numbers
// 	//create different classes for form styles since all background colors are the same the input is not visible.
// 	const fahrenheit = document.getElementById('fahrenheit').value
// 	const input = document.querySelector('input')
// 	const button = document.querySelector('button')

// 	input.classList.remove('cold')
// 	input.classList.remove('medium')
// 	input.classList.remove('hot')

// 	button.classList.remove('cold')
// 	button.classList.remove('medium')
// 	button.classList.remove('hot')

// 	if (fahrenheit >= 68) {
// 		//hot
// 		input.classList.remove('cold')
// 		input.classList.remove('medium')
// 		input.classList.add('hot')

// 		button.classList.remove('cold')
// 		button.classList.remove('medium')
// 		button.classList.add('hot')
// 	} else if (fahrenheit < 68 && fahrenheit >= 50) {
// 		//sunny
// 		input.classList.remove('cold')
// 		input.classList.remove('hot')
// 		input.classList.add('mediumForm')

// 		button.classList.remove('cold')
// 		button.classList.remove('hot')
// 		button.classList.add('mediumForm')
// 	} else if (fahrenheit < 50 && fahrenheit > -28) {
// 		//default
// 		input.classList.remove('cold')
// 		input.classList.remove('medium')
// 		input.classList.remove('hot')

// 		button.classList.remove('cold')
// 		button.classList.remove('medium')
// 		button.classList.remove('hot')
// 	} else {
// 		//cold
// 		input.classList.remove('hot')
// 		input.classList.remove('medium')
// 		input.classList.add('cold')

// 		button.classList.remove('hot')
// 		button.classList.remove('medium')
// 		button.classList.add('cold')
// 	}
// }

function convertToCelsius(e) {
	e.preventDefault()
	const fahrenheit = document.getElementById('fahrenheit').value
	const result = document.getElementById('celsius')
	const body = document.querySelector('body')

	body.classList.remove('hot')
	body.classList.remove('medium')
	body.classList.remove('cold')
	result.innerHTML = ''

	const celsius = (fahrenheit - 32) * (5 / 9)

	const formattedCelsius = celsius.toPrecision(2)

	if (formattedCelsius >= 20) {
		body.classList.add('hot')
		body.classList.remove('cold')
		body.classList.remove('medium')

		result.innerHTML = `🥵 ${formattedCelsius}&deg;C 🥵`
	} else if (formattedCelsius < 20 && formattedCelsius >= 10) {
		body.classList.remove('hot')
		body.classList.remove('cold')
		body.classList.add('medium')

		result.innerHTML = `🌞 ${formattedCelsius}&deg;C 🌞`
	} else if (formattedCelsius < 10 && formattedCelsius > -2) {
		result.innerHTML = `🌧️ ${formattedCelsius}&deg;C 🌧️`
	} else {
		body.classList.remove('hot')
		body.classList.remove('medium')
		body.classList.add('cold')

		result.innerHTML = `🥶 ${formattedCelsius}&deg;C 🥶`
	}
}
