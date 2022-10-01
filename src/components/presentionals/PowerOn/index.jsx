import React, { useEffect, useState } from "react";

import powerOnStore from '../../../store/powerOnStore';

import Button from '../../styled-components/Button';

export default function ToggleInfo() {
    const { switchPower } = powerOnStore();

    return (
        <Button
            top='46.45vmin'
            left='4.44vmin'
            onClick={() => switchPower()}
        />
    )
};

