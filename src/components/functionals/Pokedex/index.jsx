import React, { useEffect, useState } from "react";

import PokedexDiv from '../../styled-components/PokedexDiv';
import PokedexImg from '../../styled-components/PokedexImg';
import Sprite from '../../styled-components/Sprite';

import Types from '../../presentionals/Types';
import Body from '../../presentionals/Body';
import Stats from '../../presentionals/Stats';
import Info from '../../presentionals/Info';
import Switch from '../../presentionals/Switch';
import ToggleInfo from '../../presentionals/ToggleInfo';
import Searches from '../../presentionals/Searches';
import PowerOn from '../../presentionals/PowerOn';

import powerOnStore from '../../../store/powerOnStore';

export default function Pokedex({ pokemon, loaded }) {
    const { isOn } = powerOnStore();
    const [info, setInfo] = useState(false)

    const [currentId, setCurrentId] = useState(1)

    const prevId = () => setCurrentId(currentId > 1 ? currentId - 1 : 905);
    const nextId = () => setCurrentId(currentId < 905 ? currentId + 1 : 1);

    return (
        <PokedexDiv>
            <PokedexImg
                src={`${process.env.PUBLIC_URL}/images/Pokedex${isOn ? '' : 'Off'}.png`}
            />

            <PowerOn />

            {loaded && isOn ?
                <Sprite src={pokemon.sprite} />
                : ''}

            <Searches/>
            <ToggleInfo/>
            <Switch prev={prevId} next={nextId} loaded={loaded} />
            <Info pokemon={loaded ? pokemon : ''} loaded={loaded} info={info} />
            <Stats pokemon={loaded ? pokemon : ''} loaded={loaded} />
            <Types pokemon={loaded ? pokemon : ''} loaded={loaded} />
            <Body pokemon={loaded ? pokemon : ''} loaded={loaded} />

        </PokedexDiv>
    )
};
