import React, { useEffect, useState } from "react";

import TypesPanel from '../../styled-components/TypesPanel';

export default function Types({ pokemon, loaded }) {

    return (
        <div>
            <TypesPanel top={'480px'} left={'543px'} >
                {loaded ? (pokemon.types[0].type.name) : ''}
            </TypesPanel>

            <TypesPanel top={'522px'} left={'543px'} >
                {loaded && pokemon.types[1] ? pokemon.types[1].type.name : ''}
            </TypesPanel>
        </div>
    )
};
