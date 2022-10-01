import React, { useEffect, useState } from "react";

import TypesPanel from '../../styled-components/TypesPanel';

export default function Types({ pokemon, loaded }) {

    return (
        <div>
            <TypesPanel top='50vmin' left='53.2vmin' >
                {loaded ? (pokemon.types[0].type.name) : ''}
            </TypesPanel>

            <TypesPanel top='53.4vmin' left='53.2vmin' >
                {loaded && pokemon.types[1] ? pokemon.types[1].type.name : ''}
            </TypesPanel>
        </div>
    )
};
