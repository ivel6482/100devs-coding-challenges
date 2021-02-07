const slot = {
	reelSymbols: ['1', '2', '3', '4', '5'],
	reel1: null,
	reel2: null,
	reel3: null,
	credit: 100,
	bet: null,
	spin(betAmount) {
		this.bet = betAmount
		document.querySelector('h2').innerText = ''
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

		//TODO: display credits and bet and winnings

		if (slot.reel1 === slot.reel3 && slot.reel2 === slot.reel3) {
			if (this.bet === 5) {
				this.credit += this.bet * 3
			} else if (this.bet === 1.5) {
				this.credit += this.bet * 0.7
			}
			document.querySelector('h2').innerText = 'JACKPOT!'
		} else {
			if (this.credit === 0) {
				document.querySelector('h2').innerText = 'GAME OVER'
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
}

document.querySelector('#max').addEventListener('click', () => slot.display(5))
document
	.querySelector('#min')
	.addEventListener('click', () => slot.display(1.5))
