import React from 'react';

import { Outter, Inner } from './style';

export default function HigherTemplate({ children, top, left, flexDir = 'row' }) {

    return (
        <Outter top={top} left={left}>
            <Inner flexDir={flexDir}>
                {children}
            </Inner>
        </Outter>
    )
};
