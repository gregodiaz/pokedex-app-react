import styled from 'styled-components';

import colors from '../../../constants/colors'

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: ${colors.dark};
`;

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2vmin;
    border-radius: .5vmin;
    background: ${colors.pokedex};

    form > * {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: .3vmin;
        padding: .2vmin;
        padding-left: 1vmin;
        border: 0vmin;
        margin: .7vmin;
        width: 34vmin;
        background: ${colors.sky};
        
        &: focus {
            outline: .06vmin solid ${colors.blue};
        }

        &: hover {
            background: ${colors.lightBlue};
            font-weight: bold;
        }
    }

    form > button {
        border-radius: .3vmin;
        text-align: center;
        padding: .3vmin;
        border: 0vmin;
        margin: .5vmin;
        margin-top: 2vmin;
        width: 34vmin;
        font-weight: bold;
        background: ${colors.pokedex};
        color: ${colors.darkPokedex};

        &: hover {
            background: ${colors.darkPokedex};
            color: ${colors.yellow};
        }
    }

    p {
        font-size: 2vmin;
        display: inline-block;
        text-align: right;
        margin-top: 1vmin;
        margin-bottom: 0vmin;
        color: ${colors.dark};
    }

    span {
        cursor: pointer;
        color: ${colors.lightBlue};
    }

    div { 
        border-radius: .3vmin;
        text-align: center;
        margin: .3vmin 0vmin;
        padding: .3vmin 0vmin;
        border: 0vmin;
        width: 34vmin;
        font-weight: bold;
        background: ${colors.darkPokedex};
        color: ${colors.yellow};
    }
`;
