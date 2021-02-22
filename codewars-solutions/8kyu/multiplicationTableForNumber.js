function multiTable(number) {
	// good luck
	result = ''
	for (let i = 1; i <= 10; i++) {
		result += `${i} * ${number} = ${i * number}${i === 10 ? '' : '\n'}`
	}
	return result
}
