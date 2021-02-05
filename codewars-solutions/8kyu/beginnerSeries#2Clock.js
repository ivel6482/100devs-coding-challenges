function past(h, m, s) {
	//#Happy Coding! ^_^
	const hourInMs = h * 3600000
	const minuteInMs = m * 60000
	const secondInMs = s * 1000
	return hourInMs + minuteInMs + secondInMs
}
