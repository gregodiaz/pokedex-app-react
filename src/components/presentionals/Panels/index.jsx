import React from 'react';

import InfoPanel from '../../functionals/panels/InfoPanel';
import PhysicalPanel from '../../functionals/panels/PhysicalPanel';
import StatsPanel from '../../functionals/panels/StatsPanel';
import TypesPanel from '../../functionals/panels/TypesPanel';

export default function Panels() {
    return (
        <>
            <InfoPanel />
            <StatsPanel />
            <TypesPanel />
            <PhysicalPanel />
        </>
    )
};

