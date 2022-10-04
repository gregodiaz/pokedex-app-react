import React, { useState } from "react";

import { Arrow } from './style'

import booleansStore from '../../../store/booleansStore';

export default function ArrowButton(props) {
    const { isOn } = booleansStore();

    return (
        <Arrow
            top={props.top}
            left={props.left}
            background={props.background}
            onClick={() => props.onClick()}
            disabled={!isOn}
        >
            {props.content}
        </Arrow>
    )
};

