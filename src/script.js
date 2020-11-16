const API_URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const fetchData = async (url) => {
    let request = new XMLHttpRequest();
    // open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, false);
    request.send(null);
    jsonResponse = JSON.parse(request.responseText);
    return new Promise((resolve) => { resolve(jsonResponse)});
}

const generateQuoteBtn = document.querySelector('[data-generate-quote]');


generateQuoteBtn.addEventListener('click', () => {
    const quoteElement = document.querySelector('[data-quote]');
    const quoteCharacterElement = document.querySelector('[data-character]');
    const quoteImageElement = document.querySelector('[data-quote-image]');
    if (!quoteElement || !quoteCharacterElement || !quoteImageElement) {
        throw new Error('Missing Elements')
    }

    fetchData(API_URL).then((data) => {
            quoteElement.innerHTML = data[0]['quote'];  
            quoteCharacterElement.innerHTML = data[0]['character'];
            quoteImageElement.src = data[0]['image']
        }
    )
})
