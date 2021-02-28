function findMultiples(integer, limit) {
	//your code here
	console.log('Integer: ', integer)
	console.log('Limit: ', limit)
	const multiples = []
	for (let i = integer; i <= limit; i += integer) {
		multiples.push(i)
	}
	return multiples
}
