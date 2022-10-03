import React, { useEffect, useState } from "react";

import Toggle from '../../../styled-components/buttons/Toggle';

import colors from '../../../../constants/colors';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function SwitchInfoButton() {
    const { isOn, shiny, switchShiny } = booleansStore();
    const { profile, variant, loaded, fetchSprite } = pokemonStore();

    const changeVariant = () => {
        switchShiny();
        fetchSprite(profile, variant === 'default' ? 'shiny' : 'default');
    };

    return (
        <div>
            <Toggle
                size={'3vmin'}
                fontSize={'1.3vmin'}
                top={'54vmin'}
                left={'80.8vmin'}
                border={'.3vmin solid ' + colors.light}
                bgColor={colors.yellow}
                color={colors[isOn && shiny ? 'light' : 'dark']}
                brightness={isOn && shiny ? 2 : .5}
                disabled={!isOn}
                onClick={() => changeVariant()}
            >
                ★
            </Toggle>
        </div>
    )
};

