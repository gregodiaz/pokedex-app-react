import React from "react";

import Pokemon from './style';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function PokemonSprite() {
    const { isOn } = booleansStore();
    const { pokemon, loaded } = pokemonStore();

    return (
        <div>
            {isOn && loaded ?
                <Pokemon src={pokemon.sprite} />
                : ''}
        </div>
    )
};

