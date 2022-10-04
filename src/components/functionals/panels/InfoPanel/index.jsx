import React from "react";

import Info from './style';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function InfoPanel() {
    const { isOn, moreInfo } = booleansStore();
    const { pokemon, loaded } = pokemonStore();

    const mapper = (arr, prop, propn = 'name') =>
        arr.map((elem, index) => <div key={index}>{index + 1 + ' . ' + elem[prop][propn]}</div>)

    return (
        <div>
            <Info>
                {
                    loaded && isOn ?
                        (moreInfo ?
                            pokemon.moves.length + ' Moves Availables:' :
                            pokemon.abilities.length + ' Abilities Availables:'
                        ) : ''
                }
            </Info>

            <Info
                top='24.5vmin'
                h='15vmin'
                pl='1.5vmin'
                textAlign='left'
                overflow='auto'
            >
                {
                    loaded && isOn ?
                        (moreInfo ?
                            mapper(pokemon.moves, 'move') :
                            mapper(pokemon.abilities, 'ability')
                        ) : ''
                }
            </Info>
        </div>
    )
};

