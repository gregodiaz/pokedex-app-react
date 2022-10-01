import React, { useEffect, useState } from "react";

import StatsPanel from '../../styled-components/StatsPanel';

export default function Stats({ pokemon, loaded }) {

    const h = 4.3;
    const w = 10.7;
    const top = 40.3;
    const left = 53.2;
    const vmin = (position, displacement = 0) => position + displacement +'vmin'

    return (
        <div>
            <StatsPanel top={vmin(top)} left={vmin(left)} >
                {pokemon !== '' ? (
                    'hp' + pokemon.stats[0].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={vmin(top)} left={vmin(left + w)} >
                {pokemon !== '' ? (
                    'a' + pokemon.stats[1].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={vmin(top)} left={vmin(left + 2*w)} >
                {pokemon !== '' ? (
                    'd' + pokemon.stats[2].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={vmin(top + h)} left={vmin(left)} >
                {pokemon !== '' ? (
                    'v' + pokemon.stats[5].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={vmin(top + h)} left={vmin(left + w)} >
                {pokemon !== '' ? (
                    'sa' + pokemon.stats[3].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={vmin(top + h)} left={vmin(left + 2*w)} >
                {pokemon !== '' ? (
                    'sd' + pokemon.stats[4].base_stat
                ) : ''}
            </StatsPanel>
        </div>
    )
};
