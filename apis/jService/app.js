// Trivia game where you have to guess right one time with three tries otherwise you win.

document.querySelector('.getQuestion').addEventListener('click', getQuestion)
document.querySelector('.markCorrect').addEventListener('click', markCorrect)
document
	.querySelector('.markIncorrect')
	.addEventListener('click', markIncorrect)
document.querySelector('.playAgain').addEventListener('click', getQuestion)

const pastQuestions = []
let tries = 0
let score = 0

function getQuestion() {
	const question = document.querySelector('.question')

	const url = 'https://jservice.io/api/random'

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			// data[0].question
			// data[0].answer
			tries++
			document.querySelector('.tries').innerText = `Tries: ${tries}/3`
			question.innerText = ''
			question.innerText = `Question: ${data[0].question}`
			document.querySelector('.currentQuestion').classList.remove('hidden')
			document.querySelector('.getQuestion').style.display = 'none'
			document.querySelector('.lost').classList.add('hidden')
			document.querySelector('.won').classList.add('hidden')
			document.querySelector('.playAgain').classList.add('hidden')
			document.querySelector('.showAnswer').classList.remove('hidden')
			document.querySelector('.answer').classList.add('hidden')
			document.querySelector('.markCorrect').classList.add('hidden')
			document.querySelector('.markIncorrect').classList.add('hidden')
			document
				.querySelector('.showAnswer')
				.addEventListener('click', () => showAnswer(data[0].answer))
		})
		.catch((err) => console.error(err))
}

function showAnswer(answer) {
	document.querySelector('.answer').classList.remove('hidden')
	document.querySelector('.showAnswer').classList.add('hidden')
	document.querySelector('.answer').innerHTML = `Answer: ${String(answer)}`
	document.querySelector('.markCorrect').classList.remove('hidden')
	document.querySelector('.markIncorrect').classList.remove('hidden')
}

function markCorrect() {
	score++
	if (tries <= 3 && score > 0) {
		//Display that the user own in the DOM and make a button to play again
		document.querySelector('.playAgain').classList.remove('hidden')
		document.querySelector('.currentQuestion').classList.add('hidden')
		document.querySelector('.won').classList.remove('hidden')
		tries = 0
		score = 0
	}
}

function markIncorrect() {
	if (tries === 3) {
		document.querySelector('.playAgain').classList.remove('hidden')
		document.querySelector('.currentQuestion').classList.add('hidden')
		document.querySelector('.lost').classList.remove('hidden')
		tries = 0
		score = 0
	} else {
		getQuestion()
	}
}
