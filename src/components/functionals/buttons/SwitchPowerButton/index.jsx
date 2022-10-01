import React, { useEffect, useState } from "react";

import booleansStore from '../../../../store/booleansStore';

import Toggle from '../../../styled-components/buttons/Toggle';

export default function SwitchPowerButton() {
    const { switchPower } = booleansStore();

    return (
        <Toggle
            top='46.45vmin'
            left='4.44vmin'
            onClick={() => switchPower()}
        />
    )
};

