import React from 'react';

import { Inner } from './style';

export default function FlushTemplate({ children, top, left }) {

    return (
        <Inner top={top} left={left}>
            {children}
        </Inner>
    )
};
