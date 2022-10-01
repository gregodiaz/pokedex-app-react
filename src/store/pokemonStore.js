import create from "zustand";

const url = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonStore = create(set => ({
    pokemon: {},
    loaded: false,

    // fetchPokemon: async id => {
    //     const response = await fetch(url + id);
    //     const data = await response.json();

    //     const spriteResponse = await fetch(data.sprites.front_default)
    //     const sprite = spriteResponse.url

    //     set({ pokemon: { ...data, sprite } })
    //     set({ loaded: true })
    // },
}));

export default pokemonStore;
