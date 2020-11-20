const API_URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

const generateQuoteBtn = document.querySelector('[data-generate-quote]');

generateQuoteBtn.addEventListener('click', () => {
    const quoteElement = document.querySelector('[data-quote]');
    const quoteCharacterElement = document.querySelector('[data-character]');
    const quoteImageElement = document.querySelector('[data-quote-image]');
    if (!quoteElement || !quoteCharacterElement || !quoteImageElement) {
        throw new Error('Missing Elements');
    }

    quoteElement.innerHTML = 'Loading...';

    const promise = fetchData();
    promise.then((data) => {
            quoteElement.innerHTML = data[0]['quote'];
            quoteCharacterElement.innerHTML = data[0]['character'];
            quoteImageElement.src = data[0]['image'];
        }
    )
})
