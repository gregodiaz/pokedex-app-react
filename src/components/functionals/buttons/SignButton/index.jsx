import React from "react";
import { useNavigate } from "react-router-dom";

import Button from './style';

export default function Sign({ children, route, background, color }) {
    const navigate = useNavigate();

    const navigateTo = () => navigate(route);

    return (
        <Button
            background={background}
            color={color}
            onClick={() => navigateTo()}
        >
            {children}
        </Button>
    )
};

