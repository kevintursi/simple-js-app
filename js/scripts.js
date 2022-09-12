//List of Pokemon in pokemonRepository IIFE
let pokemonRepository = (function() {
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 0.7,
      types: [
        'grass',
        'poison'
      ]
    },
    {
      name: 'Charizard',
      height: 1.7,
      types: [
        'fire', 'flying'
      ]
    },
    {
      name: 'Squirtle',
      height: 0.5,
      types: [
        'water'
      ]
    }
  ];

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

// returning oject with getAll() and add(pokemon) and addListItem() assigned as keys
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})()

// height treshold for guaging whether a pokemon is big or not
let heightThresh = 1.0;

// forEach loop to iterate each pokemon in the pokemonList
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
