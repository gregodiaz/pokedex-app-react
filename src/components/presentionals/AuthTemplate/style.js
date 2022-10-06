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
    flex-direction: column;
    padding: 2vmin;
    border-radius: .5vmin;
    background: dimgray;

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
        
        &: focus {
            outline: .06vmin solid ${colors.lightBlue};
        }

        &: hover {
            background: lightgray;
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
        background: ${colors.blue};
        color: ${colors.light};

        &: hover {
            background: ${colors.sky};
        }
    }

    p, a {
        font-size: 2vmin;
        display: inline-block;
        text-align: right;
        margin-top: 1vmin;
        margin-bottom: 0vmin;
    }

    a {
        color: ${colors.lightBlue};
    }
`;
