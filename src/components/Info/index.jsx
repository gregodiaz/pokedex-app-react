import React, { useEffect, useState } from "react";

export default function Info({pokemon, loaded}){
    
    const mapper = (arr, prop, propn = 'name') => 
        arr.map(elem => <div>{elem[prop][propn]}</div>)

    const printInfo = () => 
        loaded ?
        <div className="d-flex flex-row flex-wrap m-4 p-4" >
            <div className="d-flex flex-column">
                <img 
                    src={pokemon.sprite} 
                    style={{ maxHeight: '100px', maxWidth: '100px', backgroundColor: 'rgba(255,0,0,0.1)', }}
                />
                <span>{pokemon.name}</span>
                {mapper(pokemon.types, 'type')}
            </div>

            <div>
                <span>{pokemon.moves.length} Moves Availables:</span>
                <div 
                    style={{ height: '150px', backgroundColor: 'rgba(255,0,0,0.1)', }} 
                    className="overflow-auto" 
                >
                    {mapper(pokemon.moves, 'move')}
                </div>
            </div>

            <div className="d-flex flex-column mx-2">
                <span>Abilities:</span>
                {mapper(pokemon.abilities, 'ability')}
            </div>
        </div> :
        "loading... ";

    return (
        <div>
            { printInfo() }
        </div>
    )
};

