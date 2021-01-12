// Daily challenge 002
// 2021-12-1

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
