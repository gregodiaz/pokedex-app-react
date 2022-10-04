import React from "react";

import Search from './style'

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function NameSearch() {
    const { isOn } = booleansStore();
    const { pokemon } = pokemonStore();

    return (
        <form >
            <Search
                disabled={true}
                placeholder={isOn ? pokemon.name : ''}
            />
        </form>
    )
};
