import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Bar from './style';

import AddFavorite from '../buttons/AddFavorite';
import Sign from '../buttons/Sign';

import userStore from '../../../store/userStore';

export default function NavBar() {
    const { name, token, login } = userStore();
    const navigate = useNavigate();

    const route = window.location.pathname.split('/').pop();

    const authRoute = (signType, div) => route === signType ? '' : div

    const userSession = async () => {
        const credentialsJSON = window.sessionStorage.getItem('credentials')
        if (credentialsJSON) {
            const session = JSON.parse(credentialsJSON)
            await login(session)
        }
    };

    useEffect(() => {
        userSession()
    }, [])

    return (
        <Bar>
            <Sign onClick={navigate} route={'/pokedex-app-react'} theme={true}>
                Pokedex!
            </Sign >
            <div>
                {
                    token ?
                        <>
                            {authRoute('profile',
                                <>
                                    <AddFavorite />
                                    <Sign onClick={navigate} route={'/pokedex-app-react/profile'}>
                                        Profile
                                    </Sign >
                                </>
                            )}
                            <span> hi {name}!</span>
                        </> :
                        <>
                            {authRoute('login',
                                <Sign onClick={navigate} route={'/pokedex-app-react/login'}>
                                    Sign In!
                                </Sign >
                            )}
                            {authRoute('register',
                                <Sign onClick={navigate} route={'/pokedex-app-react/register'} theme={true}>
                                    Sign Up!
                                </Sign >
                            )}
                        </>
                }
            </div>
        </Bar >
    )
};
