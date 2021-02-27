// A vector type
class Vec {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	plus(vector) {
		return new Vec(vector.x + this.x, vector.y + this.y)
	}

	minus(vector) {
		return new Vec(this.x - vector.x, this.y - vector.y)
	}

	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2)
	}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)))
console.log(new Vec(1, 2).minus(new Vec(2, 3)))
console.log(new Vec(3, 4).length)

// Groups

class Group {
	constructor() {
		this.group = []
	}

	add(value) {
		if (this.group.indexOf(value) === -1) {
			this.group.push(value)
		}
	}

	delete(value) {
		if (this.group.indexOf(value) >= 0) {
			this.group = this.group.filter((member) => member !== value)
		}
	}

	has(value) {
		return this.group.indexOf(value) >= 0
	}

	static from(values) {
		let result = new Group()
		for (let value of values) {
			result.add(value)
		}

		return result
	}

	[Symbol.iterator]() {
		return new GroupIterator(this)
	}
}

console.log('==========================================')
const group = Group.from([10, 20])
console.log('Group: ', group)
console.log('Has 10: ', group.has(10))
console.log('Has 30: ', group.has(30))
group.add(10)
console.log('Group add 10: ', group)
group.delete(10)
console.log('Group delete 10: ', group)
console.log('Has 10: ', group.has(10))

console.log('==========================================')

class GroupIterator {
	constructor(group) {
		this.position = 0
		this.group = group
	}

	next() {
		if (this.position === this.group.length) {
			return {
				done: true,
			}
		}

		this.i++
		return {
			value: this.group[this.i],
			done: false,
		}
	}
}

// for (let value of Group.from(['a', 'b', 'c'])) {
// 	console.log(value)
// }

let map = { one: true, two: true, hasOwnProperty: true }

console.log(Object.call(hasOwnProperty, 'one'))
