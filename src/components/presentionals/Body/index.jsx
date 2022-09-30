import React, { useEffect, useState } from "react";

import BodyPanel from '../../styled-components/BodyPanel';

export default function Body({ pokemon, loaded }) {

    const isLoaded = (value, opt = '') => loaded ? value : opt;

    return (
        <div>
            <BodyPanel top={'576px'} left={'543px'} >
                {isLoaded('w: ' + pokemon.weight / 10 + 'kg')}
            </BodyPanel>

            <BodyPanel top={'576px'} left={'693px'} >
                {isLoaded('h: ' + pokemon.height / 10 + 'm')}
            </BodyPanel>
        </div>
    )
};

