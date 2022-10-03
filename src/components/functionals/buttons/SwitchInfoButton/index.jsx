import React from "react";

import Toggle from '../../../presentionals/buttons/Toggle'

import colors from '../../../../constants/colors';

import booleansStore from '../../../../store/booleansStore';

export default function SwitchInfoButton() {
    const { isOn, moreInfo, switchMoreInfo } = booleansStore();

    return (
        <div>
            <Toggle
                top={51}
                left={73.4}
                bgColor={colors.blue}
                disabled={!isOn}
                onClick={() => switchMoreInfo()}
            >
                !
            </Toggle>
        </div>
    )
};

