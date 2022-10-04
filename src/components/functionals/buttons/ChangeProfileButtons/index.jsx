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
                background={colors.blue}
                border={0}
                color={colors.sky}
                content={'◀'}
                left={30}
                onClick={changeProfile}
                top={54}
            />

            <ArrowButton
                background={colors.blue}
                border={0}
                content={'▶'}
                left={35}
                onClick={changeProfile}
                top={54}
            />
        </div>
    )
};

