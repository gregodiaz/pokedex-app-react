import React, { useEffect, useState } from "react";

import Pokedex from '../../../styled-components/sprites/Pokedex';

import booleansStore from '../../../../store/booleansStore';

export default function PokedexSprite() {
    const { isOn } = booleansStore();

    return (
        <Pokedex
            src={`${process.env.PUBLIC_URL}/images/Pokedex${isOn ? '' : 'Off'}.png`}
        />

    )
};
