import React from 'react';

import Pokedex from './style';

import powerStore from '../../../../store/powerStore';

export default function PokedexSprite() {
    const { isOn } = powerStore();

    return (
        <Pokedex
            src={`${process.env.PUBLIC_URL}/images/Pokedex${isOn ? '' : 'Off'}.png`}
        />

    )
};

