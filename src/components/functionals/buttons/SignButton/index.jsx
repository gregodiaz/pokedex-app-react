import React from "react";

import Button from './style';

export default function SignButton({ children, route, theme, onClick }) {

    return (
        <Button
            theme={theme}
            onClick={() => onClick(route ? route : '')}
        >
            {children}
        </Button>
    )
};

