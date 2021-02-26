// Dogs
class Dog {
	constructor(name, species, height, bark, yip) {
		this.name = name
		this.species = species
		this.height = height
	}

	describe() {
		return `${this.name} is a ${this.species} dog measuring ${this.height}`
	}

	bark() {
		return this.height > 60 ? 'Grrr! Grrr!' : 'Woof! Woof!'
	}

	barkAtCat() {
		return `Look, a cat! ${this.name} barks: ${this.bark()}`
	}
}

const fang = new Dog('Fang', 'boarhound', 75)

console.log(fang.describe())
console.log(fang.barkAtCat())

const snowy = new Dog('Snowy', 'terrier', 22)

console.log(snowy.describe())
console.log(snowy.barkAtCat())

// Character Inventory
class Character {
	constructor(name, health, strength) {
		;(this.name = name), (this.health = health), (this.strength = strength)
		this.xp = 0 // Defaults to 0
		this.gold = 10
		this.keys = 1
	}

	describe() {
		return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP, ${this.gold} gold and ${this.keys} key(s)`
	}

	attack(target) {
		if (this.health > 0) {
			const damage = this.strength

			console.log(
				`${this.name} attacks ${target.name} and causes ${damage} damage points`
			)

			target.health -= damage

			if (target.health > 0) {
				console.log(`${target.name} has ${target.health} health points left`)
			} else {
				target.health = 0
				const bonusXP = 10

				console.log(
					`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
				)

				this.xp += bonusXP
				this.gold += 10
				this.keys += 1
			}
		} else {
			console.log(`${this.name} can't attack (they've been eliminated)`)
		}
	}
}

const aurora = new Character('Aurora', 150, 25)
const glacius = new Character('Glacius', 130, 30)
const monster = new Character('Spike', 40, 20)

console.log('=======================================')

console.log('Welcome to the adventure! Here are our heroes:')

console.log(aurora.describe())
console.log(glacius.describe())

console.log(`A wild monster has appeared: it's named ${monster.name}`)

monster.attack(aurora)
monster.attack(glacius)

aurora.attack(monster)
glacius.attack(monster)

console.log(aurora.describe())
console.log(glacius.describe())

// Account list
class Account {
	constructor(name) {
		this.name = name
		this.balance = 0
	}

	credit(value) {
		return (this.balance += value)
	}

	describe() {
		return `owner: ${this.name}, balance: ${this.balance}`
	}
}

const sean = new Account('Sean')
const brad = new Account('Brad')
const georges = new Account('Georges')

const accounts = [sean, brad, georges]

console.log('===================================================')
accounts.forEach((account) => {
	account.credit(1000)
	console.log(account.describe())
})
