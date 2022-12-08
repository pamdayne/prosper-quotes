const url = 'https://gist.githubusercontent.com/DieHard073055/3b63555560e2030685147534de63fc24/raw/e2b4f756c93726619f3ce97a2530963ae9c2c41a/quotes%2520to%2520live%2520by';

window.onload = (event) => {
	renderSingleQuote()
}

async function fetchQuotes () {
	try {
		const resp = await fetch(url)
		return await resp.text()
	} catch (error) {
		console.log('Error: ' + error);
	}
}

async function renderSingleQuote () {
	let getQuotes = await fetchQuotes()
	let quotes = getQuotes.split('\n');
	let n = calcRandom(quotes.length)

	let html = `<div class="text">${quotes[n]}</div>`;

	let quoteWrapper = document.querySelector(".quote")
	quoteWrapper.innerHTML = html
}

function calcRandom (max) {
	return Math.floor(Math.random() * max);
}

const randomizer = () => {
	hideContentAnimation(document.querySelector('.quote'))
	document.querySelector('.quotes').style.display = 'none'

	setTimeout(() => {
		showContentAnimation(document.querySelector('.quote'))
	}, 1000)

	setTimeout(() => {
		renderSingleQuote()
	}, 300)
}

const hideContentAnimation = (quote) => {
	quote.style.cssText = `
		opacity: 0;
		transition: opacity 0.3s ease;
	`
}

const showContentAnimation = (quote) => {
	quote.style.cssText = `
		opacity: 1;
		transition: opacity 0.5s ease;
	`
}

function changeColorScheme () {
	document.querySelector('.body').classList.toggle('light');
}
