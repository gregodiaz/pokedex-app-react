import React from 'react';

import ArrowButton from '../../../presentionals/ArrowButton';

import pokemonStore from '../../../../store/pokemonStore';

export default function ChangePokemonButtons() {
    const { pokemon, fetchPokemon } = pokemonStore();

    const prev = () => fetchPokemon(pokemon.id > 1 ? pokemon.id - 1 : 905);
    const next = () => fetchPokemon(pokemon.id < 905 ? pokemon.id + 1 : 1);

    return (
        <>
            <ArrowButton
                onClick={prev}
                content={'◂'}
            />

            <ArrowButton
                onClick={next}
                content={'▸'}
            />
        </>
    )
};
