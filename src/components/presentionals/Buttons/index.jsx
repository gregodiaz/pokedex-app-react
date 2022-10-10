import React from 'react';

import ChangePokemonButtons from '../../functionals/buttons/ChangePokemonButtons';
import ChangeProfileButtons from '../../functionals/buttons/ChangeProfileButtons';
import SwitchInfoButton from '../../functionals/buttons/SwitchInfoButton';
import SwitchPowerButton from '../../functionals/buttons/SwitchPowerButton';
import SwitchVariantButton from '../../functionals/buttons/SwitchVariantButton';

export default function Buttons() {
    return (
        <>
            <SwitchPowerButton />
            <SwitchInfoButton />
            <SwitchVariantButton />
            <ChangePokemonButtons />
            <ChangeProfileButtons />
        </>
    )
};
