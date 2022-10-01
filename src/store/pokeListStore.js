import create from "zustand";

const url = 'https://pokeapi.co/api/v2/pokemon/';

const pokeListStore = create(set => ({
    pokeList: [],

    fetchPokeList: async (limit = 905) => {
        const response = await fetch(url + '?limit=' + limit);
        const data = await response.json();

        const resPokemons = await Promise.all(data.results.map(result => fetch(result.url)))
        const pokeList = await Promise.all(resPokemons.map(pokemon => pokemon.json()))

        set({ pokeList: pokeList.map(pokemon => pokemon.name) })
    },
}));

export default pokeListStore;

