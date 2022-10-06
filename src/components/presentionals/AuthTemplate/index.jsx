import React from "react";

import { Background, Div } from './style';

export default function AuthTemplate({children}) {
    return (
        <Background>
            <Div>
                {children}
            </Div>
        </Background>
    )
};
