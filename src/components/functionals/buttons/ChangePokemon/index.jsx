import React from "react";

import ArrowButton from '../../../presentionals/ArrowButton'

import pokemonStore from '../../../../store/pokemonStore';

import colors from '../../../../constants/colors'

export default function ChangePokemonButtons() {
    const { pokemon, fetchPokemon } = pokemonStore();

    const prev = () => fetchPokemon(pokemon.id > 1 ? pokemon.id - 1 : 905);
    const next = () => fetchPokemon(pokemon.id < 905 ? pokemon.id + 1 : 1);

    return (
        <div>
            <ArrowButton
                top={48.7}
                left={30}
                background={colors.blue}
                color={colors.sky}
                border={0}
                onClick={prev}
                content={'▼'}
            />

            <ArrowButton
                top={48.7}
                left={35}
                background={colors.blue}
                border={0}
                onClick={next}
                content={'▲'}
            />
        </div>
    )
};

