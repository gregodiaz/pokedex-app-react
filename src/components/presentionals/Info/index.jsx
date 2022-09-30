import React, { useEffect, useState } from "react";

import StatsPanel from '../../styled-components/StatsPanel';

import colors from '../../../constants/colors';

export default function Info({ pokemon, loaded, info }) {

    const mapper = (arr, prop, propn = 'name') =>
        arr.map((elem, index) => <div>{index + 1 + ' . ' + elem[prop][propn]}</div>)

    const isLoaded = (value, opt = '') => loaded ? value : opt;

    return (
        <div>
            <StatsPanel
                top={'216px'}
                left={'543px'}
                h={'43px'}
                w={'300px'}
                color={colors.yellow}
                bgColor={colors.darkGreen}
                borderColor={colors.yellow}
            >
                {
                    pokemon !== '' ? (
                        info ?
                            pokemon.moves.length + ' Moves Availables:' :
                            pokemon.abilities.length + ' Abilities Availables:'
                    ) : ''
                }
            </StatsPanel>

            <StatsPanel
                top={'258px'}
                left={'543px'}
                h={'100px'}
                w={'300px'}
                color={colors.yellow}
                bgColor={colors.darkGreen}
                borderColor={colors.yellow}
                overflow={'scroll'}
                fontSize={'1.3rem'}
                textAlign={'left'}
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
            </StatsPanel>
        </div>
    )
};

