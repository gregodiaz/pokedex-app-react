import React from 'react';

import ChangePokemon from '../../functionals/buttons/ChangePokemon';
import ChangeProfile from '../../functionals/buttons/ChangeProfile';
import SwitchInfo from '../../functionals/buttons/SwitchInfo';
import SwitchPower from '../../functionals/buttons/SwitchPower';
import SwitchVariant from '../../functionals/buttons/SwitchVariant';

export default function () {
    return (
        <>
            <SwitchPower />
            <SwitchInfo />
            <SwitchVariant />
            <ChangePokemon />
            <ChangeProfile />
        </>
    )
};
