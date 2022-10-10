import React from 'react';

import Physical from './style';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function PhysicalPanel() {
    const { pokemon, loaded } = pokemonStore();
    const { isOn } = powerStore();

    return (
        <div>
            <Physical top='58vmin' left='53.2vmin' >
                { loaded && isOn ? 'w: ' + pokemon.weight / 10 + 'kg' : '' }
            </Physical>

            <Physical top='58vmin' left='69.3vmin' >
                { loaded && isOn ? 'h: ' + pokemon.height / 10 + 'm' : '' }
            </Physical>
        </div>
    )
};

