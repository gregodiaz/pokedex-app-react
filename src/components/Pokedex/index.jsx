import React, { useEffect, useState } from "react";

import Pokemon from '../Pokemon';
import Info from '../Info';

export default function Pokedex(){
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon , setPokemon] = useState();
    const [loaded, setLoaded] = useState(false)
    const [count, setCount] = useState(1)
    const [info, setInfo] = useState(false)

    const getPokemon = async(idPokemon) => {
        const res = await fetch(url + idPokemon);
        const data = await res.json();
        const { id, name, order, weight, height, sprites, stats, types, abilities, moves } = data

        const spriteResponse = await fetch(sprites.front_default)
        const sprite = spriteResponse.url

        setPokemon({id, name, order, weight, height, sprite, stats, types, abilities, moves});
        setLoaded(true)
    }

    const counter = (num) => setCount(count + ((count + num <= 0 || count + num >= 905) ? 0 : num)); 

    useEffect(()=>{
        getPokemon(count)
    },[count]);

    return (
        <div className="flex bg-danger bg-gradient p-5">
            <div className="p-3">
                Pokedex!
            </div>
            <div className="bg-info bg-gradient p-3">
                {
                    !info ?
                        <Pokemon pokemon={pokemon} loaded={loaded} />:
                        <Info pokemon={pokemon} loaded={loaded} />
                }
            </div>
            <div className="d-flex justify-content-between pt-3">
                <button className="btn btn-danger" onClick={()=>counter(-10)}>{'◀ 10'}</button>
                <button className="btn btn-danger" onClick={()=>counter(-1)}>{'◀ Prev'}</button>
                { 
                    loaded ?
                    <h1>{pokemon.id + ". " + pokemon.name}</h1> : ''
                }
                <button className="btn btn-danger" onClick={()=>counter(1)}>{'Next ▶'}</button>
                <button className="btn btn-danger" onClick={()=>counter(10)}>{'10 ▶'}</button>
            </div>
            <button className="btn btn-info" onClick={()=>setInfo(!info)}>
                {
                    !info ?
                    <h3>◀ more info ▶</h3> :
                    <h3>◀ back ▶</h3> 
                }
            </button>
        </div>
    )
};
