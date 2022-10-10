import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Div, DivInt, Title } from './style';
import SignButton from '../buttons/SignButton';

import DefaultTemplate from '../../presentionals/DefaultTemplate';

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
        <DefaultTemplate >
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
        </DefaultTemplate >
    )
};
