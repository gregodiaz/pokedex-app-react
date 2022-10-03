import React, { useEffect, useState } from "react";

import Button from '../../../styled-components/buttons/Button';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function ChangePokemonButtons() {
    const { isOn } = booleansStore();
    const { profile, variant, loaded, fetchSprite } = pokemonStore();

    const changeProfile = () => fetchSprite( profile === 'front' ? 'back' : 'front', variant);

    return (
        <div>
            <Button
                top='47.2vmin'
                left='33vmin'
                size='4vmin'
                border='0px'
                onClick={() => { if (isOn && loaded) changeProfile() }}
            >
                ▲
            </Button>

            <Button
                top='54.8vmin'
                left='33vmin'
                size='4vmin'
                border='0px'
                onClick={() => { if (isOn && loaded) changeProfile() }}
            >
                ▼
            </Button>
        </div>
    )
};

