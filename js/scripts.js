//List of Pokemon

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


// height treshold for guaging whether a pokemon is big or not
let heightThresh = 1.0;

// forEach loop to iterate each pokemon in the pokemonList
pokemonList.forEach(function(pokemon) {
  //for pokemon equal to or above the height treshold to be labeled "Wow, that's big!"
  if (pokemon.height >= heightThresh) {
    document.write(`<li>${pokemon.name} (height: ${pokemon.height}m) - Wow, that's big!</li>`);
  } else {
    document.write(`<li>${pokemon.name} (height: ${pokemon.height}m)</li>`);
  }
});
