import React, { useEffect } from "react";

import Pokedex from '../../presentionals/Pokedex';

import pokemonStore from '../../../store/pokemonStore';

export default function ApiData() {
    const { fetchPokemon } = pokemonStore();

    useEffect(() => {
        fetchPokemon(1)
    }, []);

    return <Pokedex />
};
