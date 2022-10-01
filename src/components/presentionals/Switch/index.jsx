import React, { useEffect, useState } from "react";

import Button from '../../styled-components/Button';

export default function Switch({ addToId, loaded }) {

    return (
        <div>
            <Button
                top='50.7vmin'
                left='29.1vmin'
                size='4vmin'
                border='0px'
                onClick={() => { if (loaded) addToId(-1) }}
            >
                ◀
            </Button>

            <Button
                top='50.8vmin'
                left='36.6vmin'
                size='4vmin'
                border='0px'
                onClick={() => { if (loaded) addToId(1) }}
            >
                ▶
            </Button>
        </div>
    )
};

