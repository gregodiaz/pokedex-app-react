import React, { useEffect, useState } from "react";

import StatsPanel from '../../styled-components/StatsPanel';

import BgImage from '../../styled-components/BgImage';
import Sprite from '../../styled-components/Sprite';
import Button from '../../styled-components/Button';
import Search from '../../styled-components/Search';

import Types from '../../presentionals/Types';
import Body from '../../presentionals/Body';
import Stats from '../../presentionals/Stats';
import Info from '../../presentionals/Info';
import Switch from '../../presentionals/Switch';

import colors from '../../../constants/colors';

export default function Pokedex(){
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon , setPokemon] = useState();

    const [loaded, setLoaded] = useState(false)
    const [info, setInfo] = useState(false)

    const [currentId, setCurrentId] = useState(1)

    const [idSearch, setIdSearch] = useState('')
    const [nameSearch, setNameSearch] = useState('')

    const getPokemon = async(pokemonId) => {
        const res = await fetch(url + pokemonId);
        const data = await res.json();
        const { id, name, order, weight, height, sprites, stats, types, abilities, moves } = data

        const spriteResponse = await fetch(sprites.front_default)
        const sprite = spriteResponse.url

        setPokemon({id, name, order, weight, height, sprite, stats, types, abilities, moves});
        setLoaded(true)
    }

    const addToId = (num) => setCurrentId(currentId + ((currentId + num <= 0 || currentId + num >= 906) ? 0 : num)); 
    const format = (num) => ((num >= 10 ? '0' : '00' ) + num)

    const mapper = (arr, prop, propn = 'name') => 
        arr.map((elem, index) => <div>{index + 1 + ' . ' + elem[prop][propn]}</div>)

    const isLoaded = ( value, opt = '' ) => loaded ? value : opt;

    const handleIdSearch = event => setIdSearch(event.target.value)
    const handleNameSearch = event => setNameSearch(event.target.value)

    const handleIdSubmit = event => {
        event.preventDefault()
        event.target.firstChild.value=''
        setIdSearch('')

        console.log(event.target.firstChild.value)
    }

    const handleNameSubmit = event => {
        event.preventDefault()
        event.target.firstChild.value=''
        setNameSearch('')

        console.log(event.target.firstChild.value)
    }

    useEffect(()=>{
        getPokemon(currentId)
    },[currentId]);
    
    return (
        <div className="position-relative" style={{ height: '66vmin', width: '90vmin'}}>
            <BgImage 
                h={'663px'}
                w={'912px'}
                position={'relative'}
                src={ process.env.PUBLIC_URL + isLoaded('/Pokedex.png','/PokedexOff.png') }
            />
            
            {/* PowerOn button */}
            <Button 
                top={'466px'}
                left={'46px'}
                border={'0px'}
                onClick={()=>setLoaded(!loaded)}
            />

            {/* Sprite img */}
            { 
                loaded ? (
                    <Sprite 
                        top={'296px'}    
                        left={'231px'}    
                        src={pokemon.sprite} 
                    /> 
                ) : ''
            }

            {/* Search by Id input */}
            <form onSubmit={ handleIdSubmit }>
                <Search
                    w={ '88px' }
                    top={ '495px' }
                    left={ '179px' }
                    disabled={!loaded}
                    value={ isLoaded( idSearch ) }
                    placeholder={ loaded ? ( format(pokemon.id) ) : '' }
                    onChange={ handleIdSearch }
                />
            </form>

            {/* Search by Name input */}
            <form onSubmit={ handleNameSubmit }>
                <Search
                    w={'180px' }
                    top={'546px'}
                    left={'86px'}
                    disabled={!loaded}
                    value={ isLoaded( nameSearch ) }
                    placeholder={ loaded ? ( pokemon.name ) : '' }
                    onChange={ handleNameSearch }
                />
            </form>

            {/* Switch Info button */}
            <Button
                size={'43px'}
                bgColor={colors.blue}
                top={'499px'}
                left={'740px'}
                onClick={()=>{ setInfo(!info)}}
            > 
                { isLoaded(info ? '?' : '!') }
            </Button>

            <Switch addToId={addToId} loaded={loaded} />
            <Info pokemon={loaded ? pokemon : ''} loaded={loaded} info={info}/>
            <Stats pokemon={loaded ? pokemon : ''} loaded={loaded}/>
            <Types pokemon={loaded ? pokemon : ''} loaded={loaded} />
            <Body pokemon={loaded ? pokemon : ''} loaded={loaded}/>

        </div>
    )
};
