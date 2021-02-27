// Object literals
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1,
	},

	draw: function () {
		console.log('draw')
	},
}

circle.draw()

// Factories
function createCircle(radius) {
	return {
		radius,

		draw: function () {
			console.log('draw')
		},
	}
}

// const circle = createCircle(1)

//Constructor function
function Circle(radius) {
	this.radius = radius
	this.draw = function () {
		console.log('draw')
	}
	//return this is implied, no need to write it.
}

const another = new Circle(1)

// Constructor property
// Every object has constructor property that return the function that was use to create that object.

// e.g. another.constructor

// const another1 = new Circle(1)
// Under the hood, it's calling Circle.call({}, 1)

// Primitives or value types
// Are copied by their value
// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference or Object types
// Are copied by their reference
// Object
// Function
// Array

// Exercise
function Stopwatch() {
	let startTime = 0
	let endTime = 0

	this.start = function () {
		startTime = Date.now()
	}

	this.stop = function () {
		endTime = Date.now()
	}

	this.reset = function () {
		startTime = 0
		endTime = 0
	}

	Object.defineProperty(this, 'duration', {
		get: function () {
			return (endTime - startTime) / 1000
		},
	})
}

const sw = new Stopwatch()
