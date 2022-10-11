import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Power, off, on } from './style';

import powerStore from '../../../../store/powerStore';

export default function SwitchPowerButton() {
    const { isOn, switchPower } = powerStore();

    return (
        <ThemeProvider theme={isOn ? on : off}>
            <Power
                top={48}
                left={8}
                onClick={() => switchPower()}
            >O
            </Power>
        </ThemeProvider>
    )
};
