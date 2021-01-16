// Daily challenge 004
// 2021-14-1
// Challenge: Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function.

const names = []

function personPositionInArray(personName) {
	console.log('Original array: ', names)
	names.push(personName)
	console.log('Person added: ', names)
	console.log('Person added position in array: ', names.length)
}

personPositionInArray('Anthony')
