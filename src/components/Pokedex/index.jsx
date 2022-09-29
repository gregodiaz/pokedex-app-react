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

    const counter = (num) => setCount(count + ((count + num <= 0 || count + num >= 906) ? 0 : num)); 
    const format = (num) => ((num >= 10 ? '0' : '00' ) + num)
    const pos = (top = "0px", left = "0px", moreprops) => { return { ...moreprops, 'top': top, 'left': left} }
    const mapper = (arr, prop, propn = 'name') => 
        arr.map((elem, index) => <div>{index + 1 + ' . ' + elem[prop][propn]}</div>)

    const off = (info) => 
        loaded ? 
        process.env.PUBLIC_URL + '/Pokedex.png' :
        process.env.PUBLIC_URL + '/PokedexOff.png'

    useEffect(()=>{
        getPokemon(count)
    },[count, info]);

 // top-50 start-50 translate-middle
                // style={{ height: '66vmin', width: '90vmin'}}
    
    return (
        <div className="position-fixed" style={{ height: '66vmin', width: '90vmin'}}>
            <img 
                className="position-absolute"
                style={ pos('0px', '0px',{ height: '663px', width: '912px' }) }
                src={off(loaded)}
            >
            </img>

            <button 
                className="position-absolute border-0 bg-transparent rounded-circle"
                style={pos('473px','58px',
                        {
                            height: '45px',
                            width: '45px',
                        }
                    )}

                onClick={()=>setLoaded(!loaded)}
            >.
            </button>

            { 
                loaded ?
                <img 
                    className="position-absolute border-0 text-muted translate-middle"
                    src={pokemon.sprite} 
                    style={pos('296px','231px',
                        {
                            minHeight: '150px',
                            minWidth: '150px',
                            maxHeight: '190px',
                            maxWidth: '190px',
                            backgroundColor: '#5bc0de'
                        }
                    )}
                /> : ""
            }

            <div> 
                <input 
                    type="text"
                    className="position-absolute px-3 text-dark rounded border-0"
                    style={pos('556px','54px', 
                        { 
                            backgroundColor: '#55ab62',
                            height: '47px',
                            width: '220px',
                            textAlign: 'right',
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                    value={ loaded ? pokemon.name : '' }
                />
            </div>

            <div>
                <input 
                    type="text"
                    className="position-absolute px-3 text-dark rounded border-0"
                    style={pos('505px','159px', 
                        {
                            backgroundColor: '#55ab62',
                            height: '44px',
                            width: '114px',
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                    value={ '# ' + ( loaded ? format(pokemon.id) : '' )}
                />
            </div>

            <button 
                className="position-absolute border-0 bg-transparent text-muted"
                style={pos('508px','298px')}
                onClick={()=>{ if(loaded) counter(-1)}}
            >
                {'◀'}
            </button>

            <button 
                className="position-absolute border-0 bg-transparent text-muted"
                style={pos('508px','373px')}
                onClick={()=>{ if(loaded) counter(1)}}
            >
                {'▶'}
            </button>

            <button 
                className="position-absolute border-0 bg-primary text-dark rounded-circle"
                style={pos('496px','740px', 
                    { 
                        height: '49px',
                        width: '49px',
                    }
                )}

                onClick={()=>{ setInfo(!info)}}
            >
            { 
                loaded ?
                (info ? '?' : '!' ) :
                ''
            }
            </button>

            <div 
                className="position-absolute p-3 pt-0 text-light rounded-top overflow-auto"
                style={pos('216px','543px', 
                    { 
                        backgroundColor: '#032d29',
                        height: '43px',
                        width: '300px',
                        textAlign: 'left',
                        fontSize:'1.75rem' ,
                        fontFamily:'Titillium Web, sans-serif' 
                    }
                )}
            >   
                {
                    loaded ? 
                        ( info ?
                            pokemon.moves.length + ' Moves Availables:':
                            pokemon.abilities.length + ' Abilities Availables:'
                        ) :
                    ''
                }
            </div>

            <div 
                className="position-absolute p-3 pt-0 text-light rounded-bottom overflow-auto"
                style={pos('259px','543px', 
                    { 
                        backgroundColor: '#032d29',
                        height: '100px',
                        width: '300px',
                        textAlign: 'left',
                        fontSize:'1.75rem' ,
                        fontFamily:'Titillium Web, sans-serif' 
                    }
                )}
            >   
                {
                    loaded ? 
                        ( info ?
                            mapper(pokemon.moves, 'move') :
                            mapper(pokemon.abilities, 'ability')
                        ) :
                    ''
                }
            </div>

            <div>
                <div 
                    className="position-absolute text-dark border border-primary rounded-top rounded"
                    style={pos('376px','543px', 
                        { 
                            backgroundColor: '#31a7f1',
                            height: '44px',
                            width: '100px',
                            textAlign: 'center',
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                >   { loaded ? 'hp' + pokemon.stats[0].base_stat : '' }
                </div>
                <div 
                    className="position-absolute text-dark border border-primary rounded-top rounded"
                    style={pos('376px','643px', 
                        { 
                            backgroundColor: '#31a7f1',
                            height: '44px',
                            width: '100px',
                            textAlign: 'center',
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                >   { loaded ? 'a' + pokemon.stats[1].base_stat : '' }
                </div>
                <div 
                    className="position-absolute text-dark border border-primary rounded-top rounded"
                    style={pos('376px','743px', 
                        { 
                            backgroundColor: '#31a7f1',
                            height: '44px',
                            width: '100px',
                            textAlign: 'center',
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                >   { loaded ? 'd' + pokemon.stats[2].base_stat : '' }
                </div>
                <div 
                    className="position-absolute text-dark border border-primary rounded-bottom rounded"
                    style={pos('420px','543px', 
                        { 
                            backgroundColor: '#31a7f1',
                            height: '44px',
                            width: '100px',
                            textAlign: 'center',
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                >   { loaded ? 'v' + pokemon.stats[5].base_stat : '' }
                </div>
                <div 
                    className="position-absolute text-dark border border-primary rounded-bottom rounded"
                    style={pos('420px','643px', 
                        { 
                            backgroundColor: '#31a7f1',
                            height: '44px',
                            width: '100px',
                            textAlign: 'center',
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                >   { loaded ? 'sa' + pokemon.stats[3].base_stat : '' }
                </div>
                <div 
                    className="position-absolute text-dark border border-primary rounded-bottom rounded"
                    style={pos('420px','743px', 
                        { 
                            backgroundColor: '#31a7f1',
                            height: '44px',
                            width: '100px',
                            textAlign: 'center',
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                >   { loaded ? 'sd' + pokemon.stats[4].base_stat : '' }
                </div>
            </div>

            <div>
                <div 
                    className="position-absolute px-3 text-dark border border-secondary rounded-top rounded"
                    style={pos('485px','543px', 
                        { 
                            backgroundColor: '#dedede',
                            height: '40px',
                            width: '169px',
                            textAlign: 'center',
                            fontSize:'1.5rem' ,
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                >   { loaded ? pokemon.types[0].type.name : '' }
                </div>
                <div 
                    className="position-absolute px-3 text-dark border border-secondary rounded-bottom rounded"
                    style={pos('523px','543px', 
                        { 
                            backgroundColor: '#dedede',
                            height: '40px',
                            width: '169px',
                            textAlign: 'center',
                            fontSize:'1.5rem' ,
                            fontFamily:'Titillium Web, sans-serif' 
                        }
                    )}
                >   { loaded && pokemon.types[1] ? pokemon.types[1].type.name : '' }
                </div>
            </div>
            <div>
                <div 
                    className="position-absolute px-3 text-warning border border-warning rounded-top rounded"
                    style={pos('576px','543px', 
                        { 
                            backgroundColor: '#032d29',
                            height: '40px',
                            width: '150px',
                            textAlign: 'left',
                            fontFamily:'Titillium Web, sans-serif' ,
                            fontSize:'1.5rem' 
                        }
                    )}
                >   { loaded ? 'w: ' + pokemon.weight + 'kg' : '' }
                </div>
                <div 
                    className="position-absolute px-3 text-warning border border-warning rounded-bottom rounded"
                    style={pos('576px','693px', 
                        { 
                            backgroundColor: '#032d29',
                            height: '40px',
                            width: '150px',
                            textAlign: 'left',
                            fontFamily:'Titillium Web, sans-serif' ,
                            fontSize:'1.5rem' 
                        }
                    )}
                >   { loaded ? 'h: ' + pokemon.height / 10 + 'm' : '' }
                </div>
            </div>
        </div>
    )
};
