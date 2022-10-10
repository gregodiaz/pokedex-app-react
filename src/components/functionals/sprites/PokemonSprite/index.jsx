import React from 'react';

import Pokemon from './style';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function PokemonSprite() {
    const { pokemon, loaded } = pokemonStore();
    const { isOn } = powerStore();

    const sprite =
        loaded && !pokemon.sprite.includes('null') ?
            pokemon.sprite :
            `${process.env.PUBLIC_URL}/images/noImage.png`;

    return (
        <div>
            {
                isOn && loaded ?
                    <Pokemon src={sprite} />
                    : ''
            }
        </div>
    )
};

