import React, { useEffect, useState } from "react";

import BodyPanel from '../../styled-components/BodyPanel';

export default function Body({ pokemon, loaded }) {

    const isLoaded = (value, opt = '') => loaded ? value : opt;

    return (
        <div>
            <BodyPanel top='58vmin' left='53.2vmin' >
                {isLoaded('w: ' + pokemon.weight / 10 + 'kg')}
            </BodyPanel>

            <BodyPanel top='58vmin' left='69.3vmin' >
                {isLoaded('h: ' + pokemon.height / 10 + 'm')}
            </BodyPanel>
        </div>
    )
};

