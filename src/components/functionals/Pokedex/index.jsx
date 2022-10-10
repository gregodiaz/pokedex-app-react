import React, { useEffect } from 'react';

import PokedexContainer from './style';

import Buttons from '../../presentionals/Buttons';
import Panels from '../../presentionals/Panels';
import Searches from '../../presentionals/Searches';
import Sprites from '../../presentionals/Sprites';

import pokemonStore from '../../../store/pokemonStore';

export default function Pokedex() {
    const { pokemon, fetchPokemon } = pokemonStore();

    useEffect(() => {
        fetchPokemon(pokemon.id ? pokemon.id : 1)
    }, []);

    return (
        <PokedexContainer>
            <Sprites />
            <Buttons />
            <Panels />
            <Searches />
        </PokedexContainer>
    )
};
