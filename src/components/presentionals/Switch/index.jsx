import React, { useEffect, useState } from "react";

import Button from '../../styled-components/Button';

export default function Switch({ addToId, loaded }) {

    return (
        <div>
            <Button
                top={'508px'}
                left={'294px'}
                size={'39px'}
                borderRadius={'5px'}
                border={'0px'}
                onClick={() => { if (loaded) addToId(-1) }}
            >
                ◀
            </Button>

            <Button
                top={'508px'}
                left={'372px'}
                size={'39px'}
                borderRadius={'5px'}
                border={'0px'}
                onClick={() => { if (loaded) addToId(1) }}
            >
                ▶
            </Button>
        </div>
    )
};

