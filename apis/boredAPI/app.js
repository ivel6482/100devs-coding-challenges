document.querySelector('button').addEventListener('click', getRandomActivity)

function getRandomActivity() {
	const url = 'http://www.boredapi.com/api/activity/'
	// activity: string
	// type: string
	// participants: number
	// price: number
	// link: string
	// accessibility: float
	// key: string

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data)
			const activityContainer = document.querySelector('.activityContainer')

			const activity = document.createElement('section')
			activity.classList.add('activity')
			const activityName = document.createElement('p')
			const type = document.createElement('p')
			const participants = document.createElement('p')
			const price = document.createElement('p')
			// const link = document.createElement('p')
			// const linkText = document.createElement('a')
			const accessibility = document.createElement('p')
			// const key = document.createElement('p')

			activityName.innerText = `Activity: ${data.activity}`
			type.innerText = `Type: ${data.type}`
			participants.innerText = `Participants: ${data.participants}`
			price.innerText = `Price: $${data.price}`
			// linkText.href = data.link
			// linkText.innerText = data.link
			// link.innerText = `Link: ${linkText}`
			accessibility.innerText = `Accessibility: ${data.accessibility}`
			// key.innerText = `Key: ${data.key}`

			const elements = [
				activityName,
				type,
				participants,
				price,
				// link,
				accessibility,
				// key,
			]

			elements.forEach((element) => {
				element.classList.add('activityDetail')
				activity.appendChild(element)
			})

			activityContainer.appendChild(activity)
		})
		.catch((err) => console.error(err))
}
