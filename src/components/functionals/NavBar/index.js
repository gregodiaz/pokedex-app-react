import React from "react";

import Bar from './style';
import SignButton from '../buttons/SignButton';

import userStore from '../../../store/userStore';
import colors from "../../../constants/colors";

export default function NavBar() {
    const { name, token } = userStore();

    return (
        <Bar >
            {
                token ?
                    <>
                        <SignButton>
                            hi {name}!                        </SignButton >
                    </> :
                    <>
                        <SignButton background={'darkred'} color={'firebrick'} route={'/pokedex-app-react/register'}>
                            Sing Up!
                        </SignButton >
                        <SignButton route={'/pokedex-app-react/login'}>
                            Sing In!
                        </SignButton >
                    </>
            }
        </Bar >
    )
};
