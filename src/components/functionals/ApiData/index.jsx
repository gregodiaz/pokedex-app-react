import React, { useEffect, useState } from "react";

import Pokedex from '../Pokedex';

import pokemonStore from '../../../store/pokemonStore';
import pokeListStore from '../../../store/pokeListStore';

export default function ApiData() {
    const { pokemon, loaded, fetchPokemon } = pokemonStore();
    const { pokeList, fetchPokeList } = pokeListStore();


    const [currentId, setCurrentId] = useState(1)

    const [idSearch, setIdSearch] = useState('')
    const [nameSearch, setNameSearch] = useState('')
    const [isOn, setIsOn] = useState(true)
    const [info, setInfo] = useState(false)

    const prevId = () => setCurrentId(currentId > 1 ? currentId - 1 : 905);
    const nextId = () => setCurrentId(currentId < 905 ? currentId + 1 : 1);

    // const handleChangeId = event => setIdSearch(event.target.value)
    // const handleChangeName = event => setNameSearch(event.target.value)
    const handleChangeId = event => setIdSearch(event.target.value)
    const handleChangeName = event => console.log(event.target.value)

    const handleSubmitId = event => {
        event.preventDefault()
        console.log(event.target.firstChild.value)
        event.target.firstChild.value = ''
        setIdSearch('')
    }
    const handleSubmitName = event => {
        event.preventDefault()
        console.log(event.target.firstChild)
        // console.log(event.target.firstChild.value)
        // event.target.firstChild.value = ''
        // setNameSearch('')
    }

    useEffect(() => {
        fetchPokemon(currentId)
    }, [currentId]);

    return (
        <Pokedex 
            pokemon={pokemon}
            loaded={loaded}
            handleChangeId={handleChangeId}
            handleSubmitId={handleSubmitId}
            handleChangeName={handleChangeName}
            handleSubmitName={handleSubmitName}
            idSearch={idSearch}
            nameSearch={nameSearch}
            setIdSearch={setIdSearch}
            setNameSearch={setNameSearch}
        />
    )
};
