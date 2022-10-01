import React, { useEffect, useState } from "react";

import Search from '../../../styled-components/searches/Search';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function IdSearchInput() {
    const { isOn } = booleansStore();
    const { pokemon } = pokemonStore();

    const [idSearch, setIdSearch] = useState('')

    // const handleChangeId = event => setIdSearch(event.target.value)

    // const handleSubmitId = event => {
    //     event.preventDefault()
    //     console.log(event.target.firstChild.value)
    //     event.target.firstChild.value = ''
    //     setIdSearch('')
    // }

    const format = (id) => ((id >= 10 ? (id >= 100 ? '' : '0') : '00') + id)

        // <form onSubmit={handleSubmitId}>
                // value={idSearch}
                // onChange={handleChangeId}
    return (
        <form >
            <Search
                w='10vmin'
                top='49vmin'
                left='17vmin'
                disabled={!isOn}
                placeholder={isOn ? '#' + format(pokemon.id) : ''}
            />
        </form>
    )
};

