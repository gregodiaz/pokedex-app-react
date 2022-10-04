import React from "react";

import SwitchPowerButton from '../../functionals/buttons/SwitchPowerButton';
import SwitchInfoButton from '../../functionals/buttons/SwitchInfoButton';
import SwitchVariantButton from '../../functionals/buttons/SwitchVariantButton';
import ChangePokemonButtons from '../../functionals/buttons/ChangePokemonButtons';
import ChangeProfileButtons from '../../functionals/buttons/ChangeProfileButtons';

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
