import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Toggle, off, on } from './style';

import powerStore from '../../../store/powerStore';

export default function ToggleInfo(props) {
    const { isOn } = powerStore();

    return (
        <ThemeProvider theme={ isOn && props.active ? on : off}>
            <Toggle
                size={props.size}
                top={props.top}
                left={props.left}
                background={props.background}
                fontSize={props.fontSize}
                onClick={()=>props.onClick()}
                disabled={!isOn}
            >
                {props.content}
            </Toggle>
        </ThemeProvider>
    )
};

