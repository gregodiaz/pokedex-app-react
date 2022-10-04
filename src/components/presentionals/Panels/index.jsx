import React from "react";

import TypesPanel from '../../functionals/panels/TypesPanel';
import PhysicalPanel from '../../functionals/panels/PhysicalPanel';
import StatsPanel from '../../functionals/panels/StatsPanel';
import InfoPanel from '../../functionals/panels/InfoPanel';

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

