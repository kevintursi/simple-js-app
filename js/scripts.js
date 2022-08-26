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
    document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big! ') //For Pokemon who's height is above 1.0 to call them big
  }else if (pokemonList[i].height){
    document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ') //For Pokemon who are not above 1.0
  }
}
