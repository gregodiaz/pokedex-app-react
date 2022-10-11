import React from 'react';

import Physical from './style';

import Template from '../../../presentionals/HigherTemplate';
// import Template from '../../../presentionals/FlushTemplate';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function PhysicalPanel() {
    const { pokemon, loaded } = pokemonStore();
    const { isOn } = powerStore();

    return (
        <Template top={55.5} left={52}>
            <Physical brightness={isOn ? 1.4 : .5}>
                {loaded && isOn ? 'w: ' + pokemon.weight / 10 + 'kg' : ''}
            </Physical>

            <Physical brightness={isOn ? 1.4 : .5}>
                {loaded && isOn ? 'h: ' + pokemon.height / 10 + 'm' : ''}
            </Physical>
        </Template>
    )
};

