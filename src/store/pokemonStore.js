import create from "zustand";

const url = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonStore = create((set, get) => ({
    pokemon: {},
    loaded: false,
    profile: 'front',
    variant: 'default',

    fetchPokemon: async id => {
        const response = await fetch(url + id);
        const data = await response.json();

        const spriteResponse = await fetch(data.sprites[get().profile + '_' + get().variant])
        const sprite = spriteResponse.url

        set({ pokemon: { ...data, sprite } })
        set({ loaded: true })
    },

    fetchSprite: async (profile, variant) => {
        set({ profile, variant })

        const spriteResponse = await fetch(get().pokemon.sprites[profile + '_' + variant])
        const sprite = spriteResponse.url

        set(state => ({ pokemon: { ...state.pokemon, sprite } }))
    }
}));

export default pokemonStore;
