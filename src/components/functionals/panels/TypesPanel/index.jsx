import React from 'react';

import Types from './style';

import Template from '../../../presentionals/HigherTemplate';
// import Template from '../../../presentionals/FlushTemplate';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function TypesPanel() {
    const { pokemon, loaded } = pokemonStore();
    const { isOn } = powerStore();

    return (
        <Template top={47.6} left={52} flexDir={'column'}>
            <Types brightness={isOn ? 1.4 : .3}>
                {loaded && isOn ? (pokemon.types[0].type.name) : ''}
            </Types>
            <Types brightness={isOn ? 1.4 : .3}>
                {loaded && isOn && pokemon.types[1] ? pokemon.types[1].type.name : ''}
            </Types>
        </Template>
    )
};
