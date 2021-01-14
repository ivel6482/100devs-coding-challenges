// Daily challenge 002
// 2021-12-1
// Challenge: Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!

function alertWinnerIfGreaterThanHoundred(number, word) {
	const wordLength = word.length
	const computedLength = wordLength * number

	if (computedLength > 100) {
		console.log('WINNER!')
	} else {
		console.log('Try Again.')
	}
}

alertWinnerIfGreaterThanHoundred(5, 'hello')
alertWinnerIfGreaterThanHoundred(5245, 'hello')
