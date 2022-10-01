import React, { useEffect, useState } from "react";

import PokedexDiv from '../../styled-components/PokedexDiv';
import PokedexImg from '../../styled-components/PokedexImg';
import Sprite from '../../styled-components/Sprite';
import Button from '../../styled-components/Button';
import Search from '../../styled-components/Search';

import Types from '../../presentionals/Types';
import Body from '../../presentionals/Body';
import Stats from '../../presentionals/Stats';
import Info from '../../presentionals/Info';
import Switch from '../../presentionals/Switch';

import pokemonStore from '../../../store/pokemonStore';
import pokeListStore from '../../../store/pokeListStore';

import colors from '../../../constants/colors';

export default function Pokedex() {
    const { pokemon, loaded, fetchPokemon } = pokemonStore();
    const { pokeList, fetchPokeList } = pokeListStore();

    const [info, setInfo] = useState(false)
    const [isOn, setIsOn] = useState(true)

    const [currentId, setCurrentId] = useState(1)

    const [idSearch, setIdSearch] = useState('')
    const [nameSearch, setNameSearch] = useState('')

    const prevId = () => setCurrentId(currentId > 1 ? currentId - 1 : 905);
    const nextId = () => setCurrentId(currentId < 905 ? currentId + 1 : 1);

    const format = (id) => ((id >= 10 ? (id >= 100 ? '' : '0') : '00') + id)

    const handleIdSearch = event => setIdSearch(event.target.value)
    const handleNameSearch = event => setNameSearch(event.target.value)

    const handleIdSubmit = event => {
        event.preventDefault()
        console.log(event.target.firstChild.value)
        event.target.firstChild.value = ''
        setIdSearch('')
    }
    const handleNameSubmit = event => {
        event.preventDefault()
        console.log(event.target.firstChild.value)
        event.target.firstChild.value = ''
        setNameSearch('')
    }

    useEffect(() => {
        fetchPokemon(currentId)
    }, [currentId]);

    return (

        <PokedexDiv>
            <PokedexImg
                src={process.env.PUBLIC_URL + (isOn ? '/Pokedex.png' : '/PokedexOff.png')}
            />

            {/* PowerOn button */}
            <Button
                top='46.45vmin'
                left='4.44vmin'
                // onClick={() => setLoaded(!loaded)}
            />


            {loaded ?
                <Sprite src={pokemon.sprite} />
                : ''}


            {/* Search by Id input */}
            <form onSubmit={handleIdSubmit}>
                <Search
                    w='10vmin'
                    top='49vmin'
                    left='17vmin'
                    disabled={!loaded}
                    value={idSearch}
                    placeholder={'#' + format(pokemon.id)}
                    onChange={handleIdSearch}
                />
            </form>

            {/* Search by Name input */}
            <form onSubmit={handleNameSubmit}>
                <Search
                    w='22vmin'
                    top='54.4vmin'
                    left='5vmin'
                    disabled={!loaded}
                    value={nameSearch}
                    placeholder={pokemon.name}
                    onChange={handleNameSearch}
                />
            </form>

            {/* Switch Info button */}
            <Button
                size={'5vmin'}
                bgColor={colors.blue}
                top={'51vmin'}
                left={'73.4vmin'}
                border={'.3vmin solid ' + colors.sky}
                disabled={!loaded}
                onClick={() => { setInfo(!info) }}
            >
                {info ? '?' : '!'}
            </Button>

            <Switch prev={prevId} next={nextId} loaded={loaded} />
            <Info pokemon={loaded ? pokemon : ''} loaded={loaded} info={info} />
            <Stats pokemon={loaded ? pokemon : ''} loaded={loaded} />
            <Types pokemon={loaded ? pokemon : ''} loaded={loaded} />
            <Body pokemon={loaded ? pokemon : ''} loaded={loaded} />

        </PokedexDiv>
    )
};
