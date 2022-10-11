import React from 'react';

import Info from './style';

import Template from '../../../presentionals/HigherTemplate';
// import Template from '../../../presentionals/FlushTemplate';

import infoStore from '../../../../store/infoStore';
import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function InfoPanel() {
    const { moreInfo } = infoStore();
    const { pokemon, loaded } = pokemonStore();
    const { isOn } = powerStore();

    const mapper = (arr, prop, propn = 'name') =>
        arr.map((elem, index) => <div key={index}>{index + 1 + ' . ' + elem[prop][propn]}</div>)

    return (
        <Template top={19} left={52}>
            <div>
                <Info brightness={isOn ? 1.5 : .5}>
                    {
                        loaded && isOn ?
                            (moreInfo ?
                                pokemon.moves.length + ' Moves Availables:' :
                                pokemon.abilities.length + ' Abilities Availables:'
                            ) : ''
                    }
                </Info>

                <Info
                    h='15vmin'
                    pl='1.5vmin'
                    textAlign='left'
                    overflow='auto'
                    brightness={isOn ? 1.5 : .5}
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
        </Template>
    )
};

