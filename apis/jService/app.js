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
			console.log(data[0])
			question.innerText = `Question: ${data[0].question}`
			document
				.querySelector('.showAnswer')
				.addEventListener('click', () => showAnswer(data[0].answer))
		})
		.catch((err) => console.error(err))
}

function showAnswer(answer) {
	document.querySelector('.answer').innerHTML = `Answer: ${answer}`
}

function markCorrect() {
	console.log('mark correct')
}

function markIncorrect() {
	console.log('mark Incorrect')
}
