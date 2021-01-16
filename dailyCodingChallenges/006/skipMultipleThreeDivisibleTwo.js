// Daily challenge 006
// 2021-16-1
// Challenge: Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2.

function skipMultiplesThreeDivisibleTwo(num) {
	for (let i = 1; i <= num; i++) {
		const multiplied = i * 3
		if (multiplied % 2 !== 0) {
			console.log(i)
		}
	}
}

skipMultiplesThreeDivisibleTwo(20)
