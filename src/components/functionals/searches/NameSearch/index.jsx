import React from 'react';

import Search from './style';

// import Template from '../../../presentionals/HigherTemplate';
import Template from '../../../presentionals/FlushTemplate';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function NameSearch() {
    const { pokemon } = pokemonStore();
    const { isOn } = powerStore();

    return (
        <Template top={54.8} left={6}>
            <form >
                <Search
                    brightness={isOn ? 1.4 : .5}
                    disabled={true}
                    placeholder={isOn ? pokemon.name : ''}
                />
            </form>
        </Template>
    )
};
