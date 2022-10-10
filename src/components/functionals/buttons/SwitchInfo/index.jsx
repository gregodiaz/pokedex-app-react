import React from 'react';

import ToggleButton from '../../../presentionals/ToggleButton';

import infoStore from '../../../../store/infoStore';
import powerStore from '../../../../store/powerStore';

import colors from '../../../../constants/colors';

export default function SwitchInfoButton() {
    const { moreInfo, switchMoreInfo } = infoStore();
    const { isOn } = powerStore();

    return (
        <div>
            <ToggleButton
                size={5}
                fontSize={2.5}
                border={'.3vmin solid ' + colors.light}
                background={colors.lightBlue}
                color={colors[moreInfo ? 'light' : 'dark']}
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

