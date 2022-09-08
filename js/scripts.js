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
  function add(item) {
    pokemonList.push(item);
  }

// returning oject with getAll() and add(item) assigned as keys
  return {
    getAll: getAll,
    add: add
  }
})()

// height treshold for guaging whether a pokemon is big or not
let heightThresh = 1.0;

// forEach loop to iterate each pokemon in the pokemonList
pokemonRepository.getAll().forEach(function(pokemon) {
  //for pokemon equal to or above the height treshold to be labeled "Wow, that's big!"
  if (pokemon.height >= heightThresh) {
    document.write(`<li>${pokemon.name} (height: ${pokemon.height}m) - Wow, that's big!</li>`);
  //for pokemon below height treshold to be labeled by name and height
  } else {
    document.write(`<li>${pokemon.name} (height: ${pokemon.height}m)</li>`);
  }
});
