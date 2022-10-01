import React, { useEffect, useState } from "react";

import Search from '../../../styled-components/searches/Search';

import booleansStore from '../../../../store/booleansStore';
import pokemonStore from '../../../../store/pokemonStore';

export default function NameSearchInput() {
    const { isOn } = booleansStore();
    const { pokemon } = pokemonStore();

    const [nameSearch, setNameSearch] = useState('')

    // const handleChangeName = event => setNameSearch(event.target.value)

    // const handleSubmitName = event => {
    //     event.preventDefault()
    //     console.log(event.target.firstChild.value)
    //     event.target.firstChild.value = ''
    //     setNameSearch('')
    // }

        // <form onSubmit={handleSubmitName}>
        //         value={nameSearch}
        //         onChange={handleChangeName}
    return (
        <form >
            <Search
                w='22vmin'
                top='54.4vmin'
                left='5vmin'
                disabled={!isOn}
                placeholder={isOn ? pokemon.name : ''}
            />
        </form>
    )
};

