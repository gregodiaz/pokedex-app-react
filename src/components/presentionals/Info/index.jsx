import React, { useEffect, useState } from "react";

import InfoPanel from '../../styled-components/InfoPanel';

export default function Info({ pokemon, loaded, info }) {

    const mapper = (arr, prop, propn = 'name') =>
        arr.map((elem, index) => <div>{index + 1 + ' . ' + elem[prop][propn]}</div>)

    const isLoaded = (value, opt = '') => loaded ? value : opt;

    return (
        <div>
            <InfoPanel>
                {
                    pokemon !== '' ? (
                        info ?
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
                    pokemon !== '' ? (
                        isLoaded(
                            info ?
                                mapper(pokemon.moves, 'move') :
                                mapper(pokemon.abilities, 'ability')
                        )
                    ) : ''
                }
            </InfoPanel>
        </div>
    )
};

