import React, { useEffect, useState } from "react";

export default function Main(){
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemonList, setPokemonList] = useState();
    const [loaded, setLoaded] = useState(false)

    const limit = (num) => `?limit=${num}` 

    const getPokemons = async() => {
        const res = await fetch(url + limit(151));
        const data = await res.json()
        const pokemons = await Promise.all(data.results.map(result => fetch(result.url)))
        const pokemonsjson = await Promise.all(pokemons.map(pokemon => pokemon.json()))

        setPokemonList(pokemonsjson)
        setLoaded(true)
    }


    useEffect(()=>{
        getPokemons()
    },[]);

    return (
        <div class="flex">
            <div>
                Pokedex!
            </div>
            <div>
            {
                loaded ?
                pokemonList.map((pokemon, index) => {
                    return (
                            <img key={index} src={pokemon.sprites.front_default} />
                    )
                })
                : "Loading..."
            }
            </div>
        </div>
    )
};
