import React, { useEffect, useState } from "react";

import Types from '../../../styled-components/panels/Types';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function TypesPanel() {
    const { isOn, moreInfo } = booleansStore();
    const { pokemon, loaded } = pokemonStore();

    return (
        <div>
            <TypesPanel top='50vmin' left='53.2vmin' >
                {loaded && isOn ? (pokemon.types[0].type.name) : ''}
            </TypesPanel>

            <TypesPanel top='53.4vmin' left='53.2vmin' >
                {loaded && isOn && pokemon.types[1] ? pokemon.types[1].type.name : ''}
            </TypesPanel>
        </div>
    )
};
