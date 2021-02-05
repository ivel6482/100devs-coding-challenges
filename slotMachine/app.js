const slot = {
	reelSymbols: ['1', '2', '3', '4', '5'],
	reel1: null,
	reel2: null,
	reel3: null,
	betAmount: null,
	spin() {
		document.querySelector('h2').innerText = ''
		this.reel1 = this.reelSymbols[this.calculateRandomIndex()]
		this.reel2 = this.reelSymbols[this.calculateRandomIndex()]
		this.reel3 = this.reelSymbols[this.calculateRandomIndex()]
		console.log({
			reel1: this.reel1,
			reel2: this.reel2,
			reel3: this.reel3,
		})

		if (slot.reel1 === slot.reel3 && slot.reel2 === slot.reel3) {
			console.log('JACKPOT')
			document.querySelector('h2').innerText = 'JACKPOT!'
		}
	},
	calculateRandomIndex() {
		return Math.floor(Math.random() * this.reelSymbols.length)
	},
	display() {
		slot.spin()

		document.querySelector('#reel1').innerText = slot.reel1
		document.querySelector('#reel2').innerText = slot.reel2
		document.querySelector('#reel3').innerText = slot.reel3
	},
}

document.querySelector('#bet').addEventListener('click', slot.display)
