import React from 'react';

import Types from './style';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function TypesPanel() {
    const { pokemon, loaded } = pokemonStore();
    const { isOn } = powerStore();

    return (
        <div>
            <Types top='50vmin' left='53.2vmin' >
                {loaded && isOn ? (pokemon.types[0].type.name) : ''}
            </Types>

            <Types top='53.4vmin' left='53.2vmin' >
                {loaded && isOn && pokemon.types[1] ? pokemon.types[1].type.name : ''}
            </Types>
        </div>
    )
};
