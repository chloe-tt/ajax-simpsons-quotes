// This function loads pokemon data from the Pokemon API
function fetchPokemonJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const pokemonId = 1;
  const url = `hhttps://simpsons-quotes-api.herokuapp.com/quotes`;
  axios.get(url)
    .then(function(response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function(pokemon) {
      console.log('data decoded from JSON:', pokemon);

      // Build a block of HTML
      const pokemonHtml = `
        <p><strong>${quote.character}</strong></p>
        <img src="${quote.image}" />
        <p>${quote.quote}</p>
      `;
      document.querySelector('#chuck-norris').innerHTML = pokemonHtml;
    });
}

fetchPokemonJSON();