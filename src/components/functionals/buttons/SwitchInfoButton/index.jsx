import React, { useEffect, useState } from "react";

import Toggle from '../../../styled-components/buttons/Toggle';

import colors from '../../../../constants/colors';

import booleansStore from '../../../../store/booleansStore';

export default function SwitchInfoButton() {
    const { isOn, moreInfo, switchMoreInfo } = booleansStore();

    return (
        <div>
            <Toggle
                size={'5vmin'}
                top={'51vmin'}
                left={'73.4vmin'}
                border={'.3vmin solid ' + colors.sky}
                bgColor={colors.blue}
                color={ colors[isOn && moreInfo ? 'light' : 'dark']}
                brightness={ isOn && moreInfo? 3 : .5}
                disabled={!isOn}
                // onClick={() => switchMoreInfo()}
            >
            !
            </Toggle>
        </div>
    )
};

