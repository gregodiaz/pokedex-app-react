import React, { useState } from 'react';

import Search from './style';

import pokemonStore from '../../../../store/pokemonStore';
import powerStore from '../../../../store/powerStore';

export default function IdSearch() {
    const { pokemon, fetchPokemon } = pokemonStore();
    const { isOn } = powerStore();

    const [id, setId] = useState(null)

    const idFormated = `#${(pokemon.id < 10 ? '00' : (pokemon.id < 100 ? '0' : '')) + pokemon.id}`

    const handleChange = ({ target }) => {
        const newId = target.value

        if (!isNaN(newId) && newId >= 1 && newId <= 905) return setId(newId);
    }

    const handleSubmit = async event => {
        event.preventDefault()
        const idClean = event.target.firstChild.value
        event.target.firstChild.value = ''

        if (!isNaN(idClean) && idClean >= 1 && idClean <= 905) await fetchPokemon(id);
        else window.alert('Only numbers between 1 and 905');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Search
                disabled={!isOn}
                placeholder={isOn ? idFormated : ''}
                onChange={handleChange}
            />
        </form>
    )
};
