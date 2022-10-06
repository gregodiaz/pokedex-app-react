import React from "react";

import Pokemon from './style';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function PokemonSprite() {
    const { isOn } = booleansStore();
    const { pokemon, loaded } = pokemonStore();

    const sprite =
        loaded && !pokemon.sprite.includes('null') ?
            pokemon.sprite :
            `${process.env.PUBLIC_URL}/images/noImage.png`;

    return (
        <div>
            {isOn && loaded ?
                <Pokemon src={sprite} />
                : ''}
        </div>
    )
};

