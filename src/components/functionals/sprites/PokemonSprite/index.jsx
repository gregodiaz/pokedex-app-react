import React, { useEffect, useState } from "react";

import Pokemon from '../../../styled-components/sprites/Pokemon';

import booleansStore from '../../../../store/booleansStore';

export default function PokemonSprite() {
    const { isOn } = booleansStore();

    return (
        <Pokemon
            src={`${process.env.PUBLIC_URL}/images/Pokedex${isOn ? '' : 'Off'}.png`}
        />

    )
};

