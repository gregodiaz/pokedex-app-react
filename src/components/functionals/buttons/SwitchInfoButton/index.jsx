import React from "react";

import ToggleButton from '../../../presentionals/ToggleButton'

import colors from '../../../../constants/colors'

import booleansStore from '../../../../store/booleansStore';

export default function SwitchInfoButton() {
    const { isOn, moreInfo, switchMoreInfo } = booleansStore();

    return (
        <div>
            <ToggleButton
                size={5}
                fontSize={2.5}
                border={'.3vmin solid ' + colors.light}
                background={colors.lightBlue}
                color={colors[ moreInfo ? 'light' : 'dark']}
                brightness={isOn && moreInfo ? 2 : .5}
                active={moreInfo}
                content={'i'}
                top={51}
                left={73.4}
                disabled={!isOn}
                onClick={switchMoreInfo}
            />
        </div>
    )
};

