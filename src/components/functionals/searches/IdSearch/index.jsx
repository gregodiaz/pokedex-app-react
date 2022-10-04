import React from "react";

import Search from './style'

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function IdSearch() {
    const { isOn } = booleansStore();
    const { pokemon } = pokemonStore();

    const idFormated = `#${(pokemon.id < 10 ? '00' : (pokemon.id < 100 ? '0' : '')) + pokemon.id}`

    return (
        <form >
            <Search
                disabled={!isOn}
                placeholder={isOn ? idFormated : ''}
            />
        </form>
    )
};
