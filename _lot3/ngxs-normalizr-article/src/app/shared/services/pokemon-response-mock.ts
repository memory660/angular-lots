const pokemons = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: {
      id: 1,
      name: 'Grass 🌿',
      weaknesses: [{ id: 2, name: 'Fire 🔥' }],
      resistances: [{ id: 3, name: 'Water 🌊' }],
    },
  },
  {
    id: 2,
    name: 'Charmander',
    type: {
      id: 2,
      name: 'Fire 🔥',
      weaknesses: [{ id: 3, name: 'Water 🌊' }],
      resistances: [{ id: 1, name: 'Grass 🌿' }],
    },
  },
  {
    id: 3,
    name: 'Squirtle',
    type: {
      id: 3,
      name: 'Water 🌊',
      weaknesses: [{ id: 1, name: 'Grass 🌿' }],
      resistances: [{ id: 2, name: 'Fire 🔥' }],
    },
  },
  // More pokemons
];

export default pokemons;
