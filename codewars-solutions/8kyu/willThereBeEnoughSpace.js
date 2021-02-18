function enough(cap, on, wait) {
	// your code here
	if (cap - on - wait === 0) {
		return 0
	} else if (on + wait < cap) {
		return 0
	} else {
		return Math.abs(cap - on - wait)
	}
}
