import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Background, Div, DivInt, Title } from './style';
import SignButton from '../buttons/SignButton';
import NavBar from '../../functionals/NavBar';
import Favorites from '../../functionals/Favourites';

import userStore from '../../../store/userStore';

export default function Profile() {
    const { name, token, logout } = userStore()
    const navigate = useNavigate();

    const logoutConfirmed = () => {
        if (window.confirm('Do you want to logout?')) {
            logout()
            navigate('/pokedex-app-react')
        };
    }

    useEffect(() => {
        if (!token) navigate('/pokedex-app-react');
    }, [])

    return (
        <>
            <NavBar />
            <Background>
                <Div>
                    <DivInt width='30%'>
                        <Title>{name}</Title>
                        <SignButton onClick={logoutConfirmed}>
                            Logout
                        </SignButton >
                    </DivInt>
                    <DivInt width='70%'>
                        <Title>Favourites</Title>
                        <Favorites />
                    </DivInt>
                </Div>
            </Background>
        </>
    )
};
