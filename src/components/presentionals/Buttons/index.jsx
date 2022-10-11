import React from 'react';

import Template from '../HigherTemplate';
// import Template from '../FlushTemplate';

import ChangePokemon from '../../functionals/buttons/ChangePokemon';
import ChangeProfile from '../../functionals/buttons/ChangeProfile';
import SwitchInfo from '../../functionals/buttons/SwitchInfo';
import SwitchPower from '../../functionals/buttons/SwitchPower';
import SwitchVariant from '../../functionals/buttons/SwitchVariant';

export default function Buttons() {
    return (
        <>
            <SwitchPower />
            <SwitchInfo />
            <Template top={49.3} left={30}>
                <ChangePokemon />
            </Template>
            <Template top={54.5} left={30}>
                <ChangeProfile />
                <SwitchVariant />
            </Template>
        </>
    )
};
