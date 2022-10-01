import React, { useEffect, useState } from "react";

import Button from '../../styled-components/Button';

import colors from '../../../constants/colors';

import infoPanelStore from '../../../store/infoPanelStore';
import powerOnStore from '../../../store/powerOnStore';

export default function ToggleInfo() {
    const { info, toggleInfo } = infoPanelStore();
    const { isOn } = powerOnStore();

    return (
        <div>
            <Button
                size={'5vmin'}
                bgColor={colors.blue}
                top={'51vmin'}
                left={'73.4vmin'}
                border={'.3vmin solid ' + colors.sky}
                disabled={!isOn}
                onClick={() => toggleInfo()}
            >
                {isOn ?
                    (info ? '?' : '!')
                    : ''}
            </Button>
        </div>
    )
};

