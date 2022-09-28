import React, { useEffect, useState } from "react";

export default function Pokemon({pokemon, loaded}){

    const printPokemons = () => 
        loaded ?
        <div className="d-flex flex-row flex-wrap m-4 p-4" >
            <div className="d-flex flex-column">
                <img src={pokemon.sprite}/>
                <span>{pokemon.name}</span>
                {pokemon.types.map(type => (
                    <span>
                        {type.type.name}
                    </span>
                ))}
            </div>

            <div className="d-flex flex-column mx-2">
                <span>id: {pokemon.id}</span>
                <span>order: {pokemon.order}</span>
                <span>weight: {pokemon.weight}</span>
                <span>height: {pokemon.height}</span>
            </div>

            <div className="d-flex flex-column mx-2">
                {pokemon.stats.map(stat => (
                    <span>
                        {stat.stat.name}: {stat.base_stat}
                    </span>
                ))}
            </div>
        </div> :
        "loading... ";

    return (
        <div>
            { printPokemons() }
        </div>
    )
};

