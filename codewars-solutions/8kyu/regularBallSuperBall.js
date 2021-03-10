class Ball {
	constructor(ballType) {
		this._ballType = ballType
	}

	get ballType() {
		return this._ballType === undefined ? 'regular' : this._ballType
	}
}
