import React, { useEffect, useState } from "react";

import Button from '../../../styled-components/buttons/Button';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function ChangePokemonButtons() {
    const { isOn } = booleansStore();
    // const { pokemon, loaded, fetchPokemon } = pokemonStore();

    // const prev = () => fetchPokemon( pokemon.id > 1 ? pokemon.id - 1 : 905);
    // const next = () => fetchPokemon( pokemon.id < 905 ? pokemon.id + 1 : 1);

                // onClick={() => { if (isOn && loaded) prev() }}
                // onClick={() => { if (isOn && loaded) next() }}
    return (
        <div>
            <Button
                top='50.7vmin'
                left='29.1vmin'
                size='4vmin'
                border='0px'
            >
                ◀
            </Button>

            <Button
                top='50.8vmin'
                left='36.6vmin'
                size='4vmin'
                border='0px'
            >
                ▶
            </Button>
        </div>
    )
};

