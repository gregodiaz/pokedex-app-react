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

import colors from '../../../constants/colors';

export default function Pokedex() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState();

    const [loaded, setLoaded] = useState(false)
    const [info, setInfo] = useState(false)

    const [currentId, setCurrentId] = useState(1)

    const [idSearch, setIdSearch] = useState('')
    const [nameSearch, setNameSearch] = useState('')

    const getPokemon = async (pokemonId) => {
        const res = await fetch(url + pokemonId);
        const data = await res.json();
        const { id, name, order, weight, height, sprites, stats, types, abilities, moves } = data

        const spriteResponse = await fetch(sprites.front_default)
        const sprite = spriteResponse.url

        setPokemon({ id, name, order, weight, height, sprite, stats, types, abilities, moves });
        setLoaded(true)
    }

    const addToId = (num) => setCurrentId(currentId + ((currentId + num <= 0 || currentId + num >= 906) ? 0 : num));
    const format = (num) => ((num >= 10 ? '0' : '00') + num)

    const isLoaded = (pokemon, opt = '') => loaded ? pokemon : opt;
    const pokemonLoaded = loaded ? pokemon : ''

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
        getPokemon(currentId)
    }, [currentId]);

    return (

        <PokedexDiv>
            <PokedexImg
                src={process.env.PUBLIC_URL + isLoaded('/Pokedex.png', '/PokedexOff.png')}
            />

            {/* PowerOn button */}
            <Button
                top='46.45vmin'
                left='4.44vmin'
                onClick={() => setLoaded(!loaded)}
            />

            { loaded ?
                <Sprite src={pokemon.sprite} />
            : ''}

            {/* Search by Id input */}
            <form onSubmit={handleIdSubmit}>
                <Search
                    w='10vmin'
                    top='49vmin'
                    left='17vmin'
                    disabled={!loaded}
                    value={isLoaded(idSearch)}
                    placeholder={loaded ? '#' + (format(pokemon.id)) : ''}
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
                    value={isLoaded(nameSearch)}
                    placeholder={loaded ? (pokemon.name) : ''}
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
                {isLoaded(info ? '?' : '!')}
            </Button>

            <Switch addToId={addToId} loaded={loaded} />
            <Info pokemon={loaded ? pokemon : ''} loaded={loaded} info={info} />
            <Stats pokemon={loaded ? pokemon : ''} loaded={loaded} />
            <Types pokemon={loaded ? pokemon : ''} loaded={loaded} />
            <Body pokemon={loaded ? pokemon : ''} loaded={loaded} />

        </PokedexDiv>
    )
};
