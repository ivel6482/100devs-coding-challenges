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
			birthYear.innerText = `Birth Year: ${character.birth_year}`
			eyeColor.innerText = `Eye Color: ${character.eye_color}`
			gender.innerText = `Gender: ${character.gender}`
			hairColor.innerText = `Hair Color: ${character.hair_color}`
			height.innerText = `Height: ${character.height}cm`
			homeWorld.innerText = `Home World: ${character.homeworld}`
			mass.innerText = `Mass: ${character.mass}`
			skinColor.innerText = `Skin Color: ${character.skin_color}`

			character.species.forEach((specieContent) => {
				console.log(specieContent)
				const specie = document.createElement('li')
				specie.classList.add('specie')
				specie.innerText = specieContent
				species.appendChild(specie)
			})

			character.starships.forEach((starshipContent) => {
				const starship = document.createElement('li')
				starship.classList.add('starship')
				starship.innerText = starshipContent
				starships.appendChild(starship)
			})

			character.vehicles.forEach((vehicleContent) => {
				const vehicle = document.createElement('li')
				vehicle.classList.add('vehicle')
				vehicle.innerText = vehicleContent
				vehicles.appendChild(vehicle)
			})

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
