document.getElementById('getHoroscope').addEventListener('click', getHoroscope)

function getHoroscope() {
	const month = document.getElementById('month').value.toLowerCase()
	const result = document.getElementById('horoscope')

	switch (month) {
		case 'january':
			result.innerText = 'Aquarius'
			break

		case 'february':
			result.innerText = 'Pisces'
			break

		case 'march':
			result.innerText = 'Aries'
			break

		case 'april':
			result.innerText = 'Taurus'
			break

		case 'may':
			result.innerText = 'Gemini'
			break

		case 'june':
			result.innerText = 'Cancer'
			break

		case 'july':
			result.innerText = 'Leo'
			break

		case 'august':
			result.innerText = 'Virgo'
			break

		case 'september':
			result.innerText = 'Libra'
			break

		case 'october':
			result.innerText = 'Scorpio'
			break

		case 'november':
			result.innerText = 'Sagittarius'
			break

		case 'december':
			result.innerText = 'Capricorn'
			break

		default:
			result.innerText = 'Please enter a valid month'
			break
	}
}
