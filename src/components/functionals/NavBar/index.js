import React from "react";
import { useNavigate } from "react-router-dom";

import Bar from './style';
import SignButton from '../buttons/SignButton';

import userStore from '../../../store/userStore';

export default function NavBar() {
    const { name, token, logout } = userStore();
    const navigate = useNavigate();

    const route = window.location.pathname.split("/").pop();

    const authRoute = (signType, div) => route === signType ? '' : div
    const logoutConfirmed = () => { if (window.confirm('Do you want to logout?')) logout() }

    return (
        <Bar>
            <SignButton onClick={navigate} route={'/pokedex-app-react'} theme='invert'>
                Pokedex!
            </SignButton >
            <div>
                {
                    token ?
                        <>
                            <SignButton theme='invert'>
                                hi {name}!
                            </SignButton >
                            <SignButton onClick={logoutConfirmed}>
                                Logout
                            </SignButton >
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
