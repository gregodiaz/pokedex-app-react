import React, { useState } from 'react';

import ArrowButton from '../../../presentionals/ArrowButton';

import pokemonStore from '../../../../store/pokemonStore';

export default function SwitchInfoButton() {
    const { profile, variant, fetchSprite } = pokemonStore();

    const [shiny, setShiny] = useState(variant === 'shiny');

    const changeVariant = () => {
        fetchSprite(profile, shiny ? 'default' : 'shiny');
        setShiny(!shiny);
    };

    return (
        <ArrowButton
            onClick={changeVariant}
            content={'★'}
        />
    )
};

