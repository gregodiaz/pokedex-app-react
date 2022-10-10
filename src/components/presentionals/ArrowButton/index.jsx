import React from 'react';

import { Arrow } from './style';

import powerStore from '../../../store/powerStore';

export default function ArrowButton(props) {
    const { isOn } = powerStore();

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

