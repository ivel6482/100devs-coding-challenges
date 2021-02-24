function hello(name) {
	if (name && name.length > 0) {
		const lowerCased = name.toLowerCase()
		const firstChar = lowerCased.charAt(0).toUpperCase()
		const formattedName = firstChar + lowerCased.substring(1)
		return `Hello, ${formattedName}!`
	} else {
		return 'Hello, World!'
	}
}
