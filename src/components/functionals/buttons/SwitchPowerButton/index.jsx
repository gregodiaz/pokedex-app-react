import React from "react";
import { ThemeProvider } from "styled-components";

import { Power, off, on } from './style';

import booleansStore from '../../../../store/booleansStore';

export default function SwitchPowerButton() {
    const { isOn, switchPower } = booleansStore();

    return (
        <ThemeProvider theme={isOn ? on : off}>
            <Power
                top={47.45}
                left={7.44}
                onClick={() => switchPower()}
            >O
            </Power>
        </ThemeProvider>
    )
};
