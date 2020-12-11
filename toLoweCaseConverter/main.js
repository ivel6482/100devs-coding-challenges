// Coding challenge #2
// Class #11
// Date: 2020-12-11
// Description: Uppercase to Lowercase Text Converter

// get the text to be converted
// convert the text
// output converted text
// reset to be able to convert another piece of text
document.querySelector('#convertText').addEventListener('click', convertText)
document.querySelector('#reset').addEventListener('click', resetUI)

function convertText(e) {
	e.preventDefault()
	const textarea = document.querySelector('textarea')
	const convertBtn = document.querySelector('#convertText')
	const output = document.querySelector('pre')
	const resetBtn = document.querySelector('#reset')

	const textToConvert = document.querySelector('textarea').value
	const convertedText = textToConvert.toLowerCase()

	convertBtn.style.display = 'none'
	textarea.classList.add('hidden')
	textarea.value = ''

	output.innerText = convertedText
	output.classList.remove('hidden')
	resetBtn.classList.remove('hidden')
}

function resetUI() {
	const textarea = document.querySelector('textarea')
	const convertBtn = document.querySelector('#convertText')
	const output = document.querySelector('pre')
	const resetBtn = document.querySelector('#reset')

	output.classList.add('hidden')
	resetBtn.classList.add('hidden')
	output.innerText = ''

	textarea.classList.remove('hidden')
	convertBtn.style.display = 'block'
}
