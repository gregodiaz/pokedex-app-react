import React, { useEffect, useState } from "react";

import Pokemon from '../Pokemon';

export default function Pokedex(){
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon , setPokemon] = useState();
    const [loaded, setLoaded] = useState(false)
    const [count, setCount] = useState(1)

    const getPokemon = async(idPokemon) => {
        const res = await fetch(url + idPokemon);
        const data = await res.json();
        const { id, name, order, weight, height, sprites, stats, types } = data

        const spriteResponse = await fetch(sprites.front_default)
        const sprite = spriteResponse.url

        setPokemon({id, name, order, weight, height, sprite, stats, types});
        setLoaded(true)
    }

    const counter = (num) => setCount(count + ((count + num <= 0 || count + num >= 1154) ? 0 : num)); 

    useEffect(()=>{
        getPokemon(count)
    },[count]);

    return (
        <div className="flex bg-danger bg-gradient p-5">
            <div className="p-3">
                Pokedex!
            </div>
            <div className="bg-info bg-gradient p-3">
                <Pokemon pokemon={pokemon} loaded={loaded} />
            </div>
            <div className="d-flex justify-content-between pt-3">
                <button onClick={()=>counter(-10)}>{'<10'}</button>
                <button onClick={()=>counter(-1)}>{'<'}</button>
                { 
                    loaded ?
                    <h1>{pokemon.id + ". " + pokemon.name}</h1> : ''
                }
                <button onClick={()=>counter(1)}>{'>'}</button>
                <button onClick={()=>counter(10)}>{'10>'}</button>
            </div>
        </div>
    )
};
