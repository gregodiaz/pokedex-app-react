import React from 'react';

import Stats from './style';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function StatsPanel() {
    const { pokemon, loaded } = pokemonStore();
    const { isOn } = powerStore();


    const h = 4.3;
    const w = 10.7;
    const top = 40.3;
    const left = 53.2;
    const vmin = (position, displacement = 0) => position + displacement +'vmin'

    return (
        <div>
            <Stats top={vmin(top)} left={vmin(left)} >
                { loaded && isOn ? (
                    'hp' + pokemon.stats[0].base_stat
                ) : ''}
            </Stats>

            <Stats top={vmin(top)} left={vmin(left + w)} >
                { loaded && isOn ? (
                    'a' + pokemon.stats[1].base_stat
                ) : ''}
            </Stats>

            <Stats top={vmin(top)} left={vmin(left + 2*w)} >
                { loaded && isOn ? (
                    'd' + pokemon.stats[2].base_stat
                ) : ''}
            </Stats>

            <Stats top={vmin(top + h)} left={vmin(left)} >
                { loaded && isOn ? (
                    'v' + pokemon.stats[5].base_stat
                ) : ''}
            </Stats>

            <Stats top={vmin(top + h)} left={vmin(left + w)} >
                { loaded && isOn ? (
                    'sa' + pokemon.stats[3].base_stat
                ) : ''}
            </Stats>

            <Stats top={vmin(top + h)} left={vmin(left + 2*w)} >
                { loaded && isOn ? (
                    'sd' + pokemon.stats[4].base_stat
                ) : ''}
            </Stats>
        </div>
    )
};
