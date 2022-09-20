//List of Pokemon in pokemonRepository IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //fetching Pokemon list from API and loading all 150 POkemon from the list to PokemonList array
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

//defining getAll() function
  function getAll() {
    return pokemonList;
  }

//defining add(item) function
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //AddListItem function is to iterate each Pokemon in their own box
  function addListItem(pokemon){
    // assign the pokemon list to new variable
    let pokemonList = document.querySelector('.pokemon-list');
    //create new list entry and makes a button
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    // changes text of button to match up with specific pokemon name
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    // add event handler calling function showDetails(pokemon)
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }
//made showDetails() function that prints details of pokemon to the console
  function showDetails(pokemon){
    console.log(pokemon);
  }

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
}
// returning oject with getAll() and add(pokemon) and addListItem() assigned as keys
  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem
  };
})();

// height treshold for guaging whether a pokemon is big or not
let heightThresh = 1.0;

// forEach loop to iterate each pokemon in the pokemonList
pokemonRepository.loadList().then(function()
{
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
