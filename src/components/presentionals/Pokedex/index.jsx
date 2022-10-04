import React from "react";

import PokedexDiv from './style';
import Sprites from '../Sprites';
import Buttons from '../Buttons';
import Panels from '../Panels';
import Searches from '../Searches';

export default function Pokedex() {
    return (
        <PokedexDiv>
            <Sprites />
            <Buttons />
            <Panels />
            <Searches />
        </PokedexDiv>
    )
};
