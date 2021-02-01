document.querySelector('.search').addEventListener('click', function (e) {
	e.preventDefault()
	const searchTerm = document.querySelector('.searchBar').value
	console.log(searchTerm)
	const url = `https://swapi.dev/api/people/?search=${searchTerm}`

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			const name = document.querySelector('.name')
			const birthYear = document.querySelector('.birthYear')
			const eyeColor = document.querySelector('.eyeColor')
			const gender = document.querySelector('.gender')
			const hairColor = document.querySelector('.hairColor')
			const height = document.querySelector('.height')
			const homeWorld = document.querySelector('.homeWorld')
			const mass = document.querySelector('.mass')
			const skinColor = document.querySelector('.skinColor')
			const species = document.querySelector('.species')
			const starships = document.querySelector('.starships')
			const vehicles = document.querySelector('.vehicles')

			const character = data.results[0]

			name.innerText = character.name
			birthYear.innerText = character.birth_year
			eyeColor.innerText = character.eye_color
			gender.innerText = character.gender
			hairColor.innerText = character.hair_color
			height.innerText = character.height
			homeWorld.innerText = character.homeworld
			mass.innerText = character.mass
			skinColor.innerText = character.skin_color

			// character.species.forEach((specieContent) => {
			// 	const specie = document.createElement('li')
			// 	specie.classList.add('specie')
			// 	specie.innerText = specieContent
			// 	species.appendChild(specie)
			// })

			// character.starships.forEach((starshipContent) => {
			// 	const starship = document.createElement('li')
			// 	specie.classList.add('starship')
			// 	starships.appendChild((starship.innerText = starshipContent))
			// })

			// character.vehicles.forEach((vehicleContent) => {
			// 	const vehicle = document.createElement('li')
			// 	specie.classList.add('vehicle')
			// 	vehicles.appendChild((vehicle.innerText = vehicleContent))
			// })

			// {
			// 	count: Number,
			// 	next: Number || null,
			// 	previous: Number || null,
			// 	results: [
			// 		{
			// 			name: String,
			// 			birth_year: String,
			// 			eye_color: String,
			// 			films: [String],
			// 			gender: String,
			// 			hair_color: String,
			// 			height: String,
			// 			homeworld: String,
			// 			mass: String,
			// 			skin_color: String,
			// 			species: [String],
			// 			starships: [String],
			// 			vehicles: [String],
			// 		}
			// 	]
			// }
			document.querySelector('.result').classList.remove('hidden')
			console.log(data)
		})
		.catch((err) => console.error(err))
})
