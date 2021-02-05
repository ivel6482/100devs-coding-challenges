function abbrevName(name) {
	// code away!
	const nameArray = name.split(' ')
	const initials = nameArray.map((name) => name.toUpperCase().charAt(0))
	const abbrev = initials.join('.')
	return abbrev
}
