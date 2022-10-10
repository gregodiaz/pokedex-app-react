import React from 'react';

import Search from './style';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function NameSearch() {
    const { pokemon } = pokemonStore();
    const { isOn } = powerStore();

    return (
        <form >
            <Search
                disabled={true}
                placeholder={isOn ? pokemon.name : ''}
            />
        </form>
    )
};
