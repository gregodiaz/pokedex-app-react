import React from "react";

import Background from "./style";

export default function BackgroundTemplate({ children }) {

    return (
        <Background>
            {children}
        </Background>
    )
};
