import React from "react";

import PokedexDiv from '../../styled-components/PokedexDiv';

// import sprites
import PokemonSprite from '../../functionals/sprites/PokemonSprite';
import PokedexSprite from '../../functionals/sprites/PokedexSprite';

// import buttons
import SwitchPowerButton from '../../functionals/buttons/SwitchPowerButton';
import SwitchInfoButton from '../../functionals/buttons/SwitchInfoButton';
import SwitchVariantButton from '../../functionals/buttons/SwitchVariantButton';
import ChangePokemonButtons from '../../functionals/buttons/ChangePokemonButtons';
import ChangeProfileButtons from '../../functionals/buttons/ChangeProfileButtons';

import NewButton from '../../presentionals/buttons/Toggle'

// import panels
import TypesPanel from '../../functionals/panels/TypesPanel';
import PhysicalPanel from '../../functionals/panels/PhysicalPanel';
import StatsPanel from '../../functionals/panels/StatsPanel';
import InfoPanel from '../../functionals/panels/InfoPanel';

// import inputs
import IdSearchInput from '../../functionals/inputs/IdSearchInput';
import NameSearchInput from '../../functionals/inputs/NameSearchInput';

export default function Pokedex() {
    return (
        <PokedexDiv>

            {/* sprites */}
            <PokedexSprite />
            <PokemonSprite />

            {/* buttons */}
            <SwitchPowerButton />
            <SwitchInfoButton />
            <SwitchVariantButton />
            <ChangePokemonButtons />
            <ChangeProfileButtons />
            <NewButton />

            {/* panels */}
            <InfoPanel />
            <StatsPanel />
            <TypesPanel />
            <PhysicalPanel />

            {/* inputs */}
            <IdSearchInput />
            <NameSearchInput />

        </PokedexDiv>
    )
};
