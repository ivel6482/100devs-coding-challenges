function getCount(str) {
	var vowelsCount = 0

	// enter your majic here
	str.split('').forEach((character) => {
		if (
			character === 'a' ||
			character === 'e' ||
			character === 'i' ||
			character === 'o' ||
			character === 'u'
		) {
			vowelsCount++
		}
	})

	return vowelsCount
}
