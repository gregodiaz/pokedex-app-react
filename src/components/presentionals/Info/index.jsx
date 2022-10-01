import React, { useEffect, useState } from "react";

import InfoPanel from '../../styled-components/InfoPanel';

import infoPanelStore from '../../../store/infoPanelStore';
import powerOnStore from '../../../store/powerOnStore';
import pokemonStore from '../../../store/pokemonStore';

export default function Info() {
    const { isOn } = powerOnStore();
    const { info } = infoPanelStore();
    const { pokemon, loaded } = pokemonStore();

    const mapper = (arr, prop, propn = 'name') =>
        arr.map((elem, index) => <div key={index}>{index + 1 + ' . ' + elem[prop][propn]}</div>)

    return (
        <div>
            <InfoPanel>
                {
                    loaded && isOn ?
                        (info ?
                            pokemon.moves.length + ' Moves Availables:' :
                            pokemon.abilities.length + ' Abilities Availables:'
                        ) : ''
                }
            </InfoPanel>

            <InfoPanel
                top='24.5vmin'
                h='15vmin'
                pl='1.5vmin'
                textAlign='left'
            >
                {
                    loaded && isOn ?
                        (info ?
                            mapper(pokemon.moves, 'move') :
                            mapper(pokemon.abilities, 'ability')
                        ) : ''
                }
            </InfoPanel>
        </div>
    )
};

