const salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
}

let total = 0
for (let salary in salaries) {
	total += salaries[salary]
}

console.log(total)
