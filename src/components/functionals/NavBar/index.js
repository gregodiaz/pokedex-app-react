import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Bar from './style';
import SignButton from '../buttons/SignButton';

import userStore from '../../../store/userStore';
import pokemonStore from '../../../store/pokemonStore';

const baseUrl = 'http://localhost:8000/api/';

export default function NavBar() {
    const { id, name, token, logout, login } = userStore();
    const { pokemon } = pokemonStore();
    const navigate = useNavigate();

    const route = window.location.pathname.split("/").pop();
    const [isFav, setIsFav] = useState(false)

    const authRoute = (signType, div) => route === signType ? '' : div

    const userSession = async () => {
        const credentialsJSON = window.sessionStorage.getItem('credentials')
        if (credentialsJSON) {
            const session = JSON.parse(credentialsJSON)
            await login(session)
        }
    };

    const favPokemon = async () => {
        const body = {
            'name': pokemon.name,
            'user_id': id,
            'pokemon_id': pokemon.id,
        }

        await fetch(baseUrl + 'v1/favourites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body)
        });

        setIsFav(!isFav)
    }

    useEffect(() => {
        userSession()
    }, [])

    useEffect(() => {
        setIsFav(false)
    }, [pokemon.id])

    return (
        <Bar>
            <SignButton onClick={navigate} route={'/pokedex-app-react'} theme='invert'>
                Pokedex!
            </SignButton >
            <div>
                {
                    token ?
                        <>
                            {authRoute('profile',
                                <>
                                    <SignButton theme={!isFav} onClick={favPokemon} >
                                        ★
                                    </SignButton >
                                    <SignButton onClick={navigate} route={'/pokedex-app-react/profile'}>
                                        Profile
                                    </SignButton >
                                </>
                            )}
                            <span> hi {name}!</span>
                        </> :
                        <>
                            {authRoute('login',
                                <SignButton onClick={navigate} route={'/pokedex-app-react/login'}>
                                    Sign In!
                                </SignButton >
                            )}
                            {authRoute('register',
                                <SignButton onClick={navigate} route={'/pokedex-app-react/register'} theme='invert'>
                                    Sign Up!
                                </SignButton >
                            )}
                        </>
                }
            </div>
        </Bar >
    )
};
