import React, { useEffect } from "react";

import Pokedex from '../../presentionals/Pokedex';

import pokemonStore from '../../../store/pokemonStore';

export default function ApiData() {
    const { pokemon, fetchPokemon } = pokemonStore();

    useEffect(() => {
        fetchPokemon(pokemon.id ? pokemon.id : 1)
    }, []);

    return <Pokedex />
};
