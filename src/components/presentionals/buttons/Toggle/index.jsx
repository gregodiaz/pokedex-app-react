import React from "react";
import { ThemeProvider } from "styled-components";

import { Toggle, off, on } from './style'

import colors from '../../../../constants/colors';

import booleansStore from '../../../../store/booleansStore';

export default function ToggleInfoButton({ top, left, bgColor, disabled, onClick, content }) {
    const { isOn, moreInfo, switchMoreInfo } = booleansStore();

    return (
        <ThemeProvider theme={isOn && moreInfo ? on : off}>
            <Toggle
                top={top}
                left={left}
                bgColor={bgColor}
                disabled={disabled}
                onClick={() => onClick()}
            >
                {content}
            </Toggle>
        </ThemeProvider>
    )
};

