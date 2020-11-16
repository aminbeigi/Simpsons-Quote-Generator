let API_URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';


function fetchData(url) {
    let request = new XMLHttpRequest();
    // open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, false);
    request.send(null);
    jsonResponse = JSON.parse(request.responseText)
    return jsonResponse;
}

data = fetchData(API_URL);

let quoteElement = document.querySelector('[data-quote]');
let quotecharacter = document.querySelector('[data-character]');
let generateQuoteBtn = document.querySelector('[data-generate-quote]');

console.log(quoteElement);
console.log(quotecharacter);
console.log(generateQuoteBtn.innerHTML);


quoteElement.innerHTML = data[0]['quote'];