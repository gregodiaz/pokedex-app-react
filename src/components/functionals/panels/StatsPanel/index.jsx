import React from 'react';

import Stats from './style';

import Template from '../../../presentionals/HigherTemplate';
// import Template from '../../../presentionals/FlushTemplate';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function StatsPanel() {
    const { pokemon, loaded } = pokemonStore();
    const { isOn } = powerStore();

    const format = arrName =>
        arrName.length > 1 ?
            `s-${arrName[1].slice(0, 2)}` :
            arrName[0].slice(0, 3);

    return (
        <Template top={40} left={52}>
            {loaded ?
                pokemon.stats.map(stat => (
                    <Stats key={stat.stat.name} brightness={isOn ? 1.5 : .3}>
                        {isOn ?
                            <>
                                <p>{format(stat.stat.name.split('-'))}</p>
                                <p>{stat.base_stat}</p>
                            </>
                            : ''}
                    </Stats>
                ))
                : ''}
        </Template>
    )
};
