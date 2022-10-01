import React, { useEffect, useState } from "react";

import Search from '../../styled-components/Search';

import powerOnStore from '../../../store/powerOnStore';
import pokemonStore from '../../../store/pokemonStore';

export default function Searches() {
    const { isOn } = powerOnStore();
    const { pokemon } = pokemonStore();

    const [idSearch, setIdSearch] = useState('')
    const [nameSearch, setNameSearch] = useState('')

    const handleChangeId = event => setIdSearch(event.target.value)
    const handleChangeName = event => setNameSearch(event.target.value)

    const handleSubmitId = event => {
        event.preventDefault()
        console.log(event.target.firstChild.value)
        event.target.firstChild.value = ''
        setIdSearch('')
    }
    const handleSubmitName = event => {
        event.preventDefault()
        console.log(event.target.firstChild.value)
        event.target.firstChild.value = ''
        setNameSearch('')
    }

    const format = (id) => ((id >= 10 ? (id >= 100 ? '' : '0') : '00') + id)

    return (
        <div>
            <form onSubmit={handleSubmitId}>
                <Search
                    w='10vmin'
                    top='49vmin'
                    left='17vmin'
                    disabled={!isOn}
                    value={idSearch}
                    placeholder={isOn ? '#' + format(pokemon.id) : ''}
                    onChange={handleChangeId}
                />
            </form>
            <form onSubmit={handleSubmitName}>
                <Search
                    w='22vmin'
                    top='54.4vmin'
                    left='5vmin'
                    disabled={!isOn}
                    value={nameSearch}
                    placeholder={isOn ? pokemon.name : ''}
                    onChange={handleChangeName}
                />
            </form>
        </div>
    )
};

