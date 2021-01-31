// Trivia game where you have to guess right one time with three tries otherwise you win.

document.querySelector('.getQuestion').addEventListener('click', getQuestion)
document.querySelector('.markCorrect').addEventListener('click', markCorrect)
document
	.querySelector('.markIncorrect')
	.addEventListener('click', markIncorrect)

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
			question.innerText = ''
			console.log(data[0])
			question.innerText = `Question: ${data[0].question}`
			document.querySelector('.getQuestion').style.display = 'none'
			document.querySelector('.showAnswer').classList.remove('hidden')
			document
				.querySelector('.showAnswer')
				.addEventListener('click', () => showAnswer(data[0].answer))
		})
		.catch((err) => console.error(err))
}

function showAnswer(answer) {
	document.querySelector('.showAnswer').classList.add('hidden')
	document.querySelector('.answer').innerHTML = `Answer: ${String(answer)}`
	document.querySelector('.markCorrect').classList.remove('hidden')
	document.querySelector('.markIncorrect').classList.remove('hidden')
}

function markCorrect() {
	tries++
	score++

	console.log('tries: ', tries)
	console.log('score: ', score)

	if (tries <= 3 && score > 0) {
		//Display that the user own in the DOM and make a button to play again
		console.log('you won')
		document.querySelector('.currentQuestion').classList.add('hidden')
		document.querySelector('.won').classList.remove('hidden')
	}
}

function markIncorrect() {
	console.log('tries: ', tries)
	if (tries === 3) {
		document.querySelector('question').innerText = 'You lost.'
	} else {
		tries++
		console.log('tries: ', tries)
		getQuestion()
	}
}
