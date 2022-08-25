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

//Loop that iterates Pokemon's names and heights and comments on biggest Pokemon

 for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.0){
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big! ')
  }else if (pokemonList[i].height){
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ')
  }
}
