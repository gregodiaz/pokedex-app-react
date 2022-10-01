import React, { useEffect, useState } from "react";

import Pokedex from '../../../styled-components/sprites/Pokedex';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function PokemonSprite() {
    const { isOn } = booleansStore();
    const { pokemon, loaded } = pokemonStore();

    return (
        <div>
            {isOn && loaded ?
                <Pokedex src={pokemon.sprite} />
                : ''}
        </div>
    )
};

