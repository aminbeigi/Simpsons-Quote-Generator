const API_URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

const generateQuoteBtn = document.querySelector('[data-generate-quote]');

const loadRandomQuote = () => {
    const quoteElement = document.querySelector('[data-quote]');
    const quoteCharacterElement = document.querySelector('[data-character]');
    const quoteImageElement = document.querySelector('[data-quote-image]');
    const quoteLoaderElement = document.querySelector('[data-loader]');
    if (!quoteElement || !quoteCharacterElement || !quoteImageElement) {
        throw new Error("Missing Elements");
    }

    // loading screen
    quoteElement.innerHTML = 'Loading...';
    quoteCharacterElement.innerHTML = '';
    quoteImageElement.style.display = 'none';
    generateQuoteBtn.style.display = 'none';
    quoteLoaderElement.style.display = 'block';

    const promise =  fetchData();
    promise.then((data) => {
            quoteElement.innerHTML = data[0]['quote'];
            quoteCharacterElement.innerHTML = data[0]['character'];
            quoteImageElement.src = data[0]['image'];

            // show elements
            quoteImageElement.style.display = 'block';
            generateQuoteBtn.style.display = 'block';
            quoteLoaderElement.style.display = 'none';
        },
        () => {
            throw new Error("Couldn't fetch API.");
        }
    )
}

// on page load load content
loadRandomQuote();

generateQuoteBtn.addEventListener('click', loadRandomQuote);