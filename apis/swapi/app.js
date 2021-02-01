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

			function getHomeWorld(url) {
				fetch(url)
					.then((res) => res.json())
					.then((data) => {
						homeWorld.innerText = `Home World: ${data.name}`
					})
					.catch((err) => console.error(err))
			}

			getHomeWorld(character.homeworld)

			name.innerText = character.name
			birthYear.innerText = `Birth Year: ${character.birth_year}`
			eyeColor.innerText = `Eye Color: ${character.eye_color}`
			gender.innerText = `Gender: ${character.gender}`
			hairColor.innerText = `Hair Color: ${character.hair_color}`
			height.innerText = `Height: ${character.height}cm`
			mass.innerText = `Mass: ${character.mass}`
			skinColor.innerText = `Skin Color: ${character.skin_color}`

			character.species.forEach((specieContent) => {
				fetch(specieContent)
					.then((res) => res.json())
					.then((data) => {
						const specie = document.createElement('li')
						specie.classList.add('specie')
						specie.innerText = data.name
						specie.appendChild(specie)
					})
					.catch((err) => console.error(err))
			})

			character.starships.forEach((starshipContent) => {
				fetch(starshipContent)
					.then((res) => res.json())
					.then((data) => {
						const starship = document.createElement('li')
						starship.classList.add('starship')
						starship.innerText = data.name
						starships.appendChild(starship)
					})
					.catch((err) => console.error(err))
			})

			character.vehicles.forEach((vehicleContent) => {
				fetch(vehicleContent)
					.then((res) => res.json())
					.then((data) => {
						const vehicle = document.createElement('li')
						vehicle.classList.add('starship')
						vehicle.innerText = data.name
						vehicles.appendChild(vehicle)
					})
					.catch((err) => console.error(err))
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
