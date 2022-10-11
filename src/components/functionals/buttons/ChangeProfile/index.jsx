import React from "react";

import ArrowButton from '../../../presentionals/ArrowButton'

import pokemonStore from '../../../../store/pokemonStore';

import colors from '../../../../constants/colors'

export default function ChangePokemonButtons() {
    const { profile, variant, fetchSprite } = pokemonStore();

    const changeProfile = () => fetchSprite(profile === 'front' ? 'back' : 'front', variant);

    return (
        <div>
            <ArrowButton
                onClick={changeProfile}
                content={'⟲'}
            />
        </div>
    )
};

