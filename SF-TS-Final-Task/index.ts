// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<HTMLLIElement> =
	document.getElementsByTagName('LI') as HTMLCollectionOf<HTMLLIElement>

for (let i = 0; i < myNodelist.length; i++) {
	const span: HTMLSpanElement = document.createElement('SPAN')
	const txt: Text = document.createTextNode('\u00D7')
	span.className = 'close'
	span.appendChild(txt)
	myNodelist[i].appendChild(span)
}

// Click on a close button to hide the current list item
function attachCloseButtonEvents() {
	const closeButtons: HTMLCollectionOf<HTMLSpanElement> =
		document.getElementsByClassName(
			'close'
		) as HTMLCollectionOf<HTMLSpanElement>

	for (let i = 0; i < closeButtons.length; i++) {
		closeButtons[i].addEventListener(
			'click',
			function (this: HTMLSpanElement): void {
				const li = this.parentElement as HTMLLIElement
				if (li) {
					li.style.display = 'none'
				}
			}
		)
	}
}

// Initial attachment of close button events
attachCloseButtonEvents()

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul')

if (list) {
	list.addEventListener(
		'click',
		function (event: MouseEvent) {
			const target = event.target as HTMLElement
			if (target.tagName === 'LI') {
				target.classList.toggle('checked')
			}
		},
		false
	)
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
	const li: HTMLLIElement = document.createElement('li')
	const input: HTMLInputElement | null = document.getElementById(
		'myInput'
	) as HTMLInputElement

	if (!input) return
	const inputValue = input.value.trim()

	if (inputValue === '') {
		alert('You must write something!')
	} else {
		const textNode: Text = document.createTextNode(inputValue)
		li.appendChild(textNode)

		const ul = document.getElementById('myUL') as HTMLUListElement
		if (ul) {
			ul.appendChild(li)
		}

		const span = document.createElement('SPAN')
		const closeText = document.createTextNode('\u00D7')
		span.className = 'close'
		span.appendChild(closeText)
		li.appendChild(span)

		span.addEventListener('click', function (this: HTMLSpanElement): void {
			const li = this.parentElement as HTMLLIElement
			if (li) {
				li.style.display = 'none'
			}
		})
	}

	input.value = ''
}
