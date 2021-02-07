const slot = {
	reelSymbols: ['1', '2', '3', '4', '5'],
	reel1: null,
	reel2: null,
	reel3: null,
	credit: 100,
	bet: null,
	spin(betAmount) {
		//FIX: credit goes to a negative value with certain bets.
		//TODO: Check if bet can be placed with the available credits.

		this.bet = betAmount

		document.querySelector('.reset').classList.add('hidden')

		document.querySelector('#min').classList.remove('hidden')
		document.querySelector('#max').classList.remove('hidden')

		document.querySelector('span').innerText = ''
		document.querySelector(
			'.credit'
		).innerText = `Credit: $${this.credit.toFixed(2)}`
		document.querySelector('.bet').innerText = `Bet: $${this.bet.toFixed(2)}`

		this.reel1 = this.reelSymbols[this.calculateRandomIndex()]
		this.reel2 = this.reelSymbols[this.calculateRandomIndex()]
		this.reel3 = this.reelSymbols[this.calculateRandomIndex()]

		console.log({
			reel1: this.reel1,
			reel2: this.reel2,
			reel3: this.reel3,
		})

		if (slot.reel1 === slot.reel3 && slot.reel2 === slot.reel3) {
			if (this.bet === 5) {
				this.credit += this.bet * 3
			} else if (this.bet === 2) {
				this.credit += this.bet * 1
			}
			document.querySelector('span').innerText = 'JACKPOT!'
		} else {
			if (this.credit === 0 || this.credit < this.bet) {
				document.querySelector('#min').classList.add('hidden')
				document.querySelector('#max').classList.add('hidden')
				document.querySelector('.reset').classList.remove('hidden')
				document.querySelector('.reels').classList.add('hidden')
				document.querySelector('span').innerText = 'GAME OVER'
			} else {
				this.credit -= this.bet
			}
		}
	},
	calculateRandomIndex() {
		return Math.floor(Math.random() * this.reelSymbols.length)
	},
	display(betAmount) {
		slot.spin(betAmount)

		console.log({
			credit: this.credit,
			bet: this.bet,
		})

		document.querySelector('#reel1').innerText = slot.reel1
		document.querySelector('#reel2').innerText = slot.reel2
		document.querySelector('#reel3').innerText = slot.reel3
	},
	reset() {
		document.querySelector('.actions').classList.add('hidden')
		document.querySelector('.reset').classList.remove('hidden')
		document.querySelector('.reels').classList.add('hidden')

		slot.credit = 100
		slot.display(slot.bet)
	},
}

document.querySelector('#max').addEventListener('click', () => slot.display(5))
document.querySelector('#min').addEventListener('click', () => slot.display(2))
document.querySelector('#reset').addEventListener('click', slot.reset)
