import React, { useEffect, useState } from "react";

import Pokedex from "../../functionals/Pokedex";
import Background from "../../styled-components/Background";

export default function Main() {

    return (
        <Background>
            <Pokedex />
        </Background>
    )
};
