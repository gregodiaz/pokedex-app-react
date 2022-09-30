import React, { useEffect, useState } from "react";

import StatsPanel from '../../styled-components/StatsPanel';

export default function Stats({pokemon, loaded}){
    
    return (
        <div>
            <StatsPanel top={'376px'} left={'543px'} >
                {pokemon !== '' ? (
                    'hp' + pokemon.stats[0].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={'376px'} left={'643px'} >
                {pokemon !== '' ? (
                    'a' + pokemon.stats[1].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={'376px'} left={'743px'} >
                {pokemon !== '' ? (
                    'd' + pokemon.stats[2].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={'420px'} left={'543px'} >
                {pokemon !== '' ? (
                    'v' + pokemon.stats[5].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={'420px'} left={'643px'} >
                {pokemon !== '' ? (
                    'sa' + pokemon.stats[3].base_stat
                ) : ''}
            </StatsPanel>

            <StatsPanel top={'420px'} left={'743px'} >
                {pokemon !== '' ? (
                    'sd' + pokemon.stats[4].base_stat
                ) : ''}
            </StatsPanel>
        </div>
    )
};
