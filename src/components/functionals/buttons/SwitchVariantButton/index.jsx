import React, { useEffect, useState } from "react";

import ToggleButton from '../../../presentionals/ToggleButton'

import colors from '../../../../constants/colors';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function SwitchInfoButton() {
    const { isOn } = booleansStore();
    const { profile, variant, fetchSprite } = pokemonStore();

    const [shiny, setShiny] = useState(variant === 'shiny');

    const changeVariant = () => {
        fetchSprite(profile, shiny ? 'default' : 'shiny');
        setShiny(!shiny);
    };

    return (
        <div>
            <ToggleButton
                size={3}
                top={53.7}
                left={81.2}
                fontSize={1.5}
                border={'.3vmin solid ' + colors.light}
                background={colors.yellow}
                color={colors[shiny ? 'light' : 'dark']}
                brightness={isOn && shiny ? 2 : .5}
                onClick={changeVariant}
                active={shiny}
                content={'★'}
            />
        </div>
    )
};

