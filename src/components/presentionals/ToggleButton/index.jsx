import React from "react";
import { ThemeProvider } from "styled-components";

import { Toggle, off, on } from './style'

import booleansStore from '../../../store/booleansStore';

export default function ToggleInfo(props) {
    const { isOn } = booleansStore();

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

