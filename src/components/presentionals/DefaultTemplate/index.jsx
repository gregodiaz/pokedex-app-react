import React from 'react';

import Background from './style';

import NavBar from '../../functionals/NavBar';

export default function DefaultTemplate({ children }) {

    return (
        <Background>
            <NavBar />
            {children}
        </Background>
    )
};
