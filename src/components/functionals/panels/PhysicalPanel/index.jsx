import React from "react";

import Physical from './style';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function PhysicalPanel() {
    const { isOn } = booleansStore();
    const { pokemon, loaded } = pokemonStore();

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

