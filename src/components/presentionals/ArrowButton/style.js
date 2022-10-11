import styled from 'styled-components';

import colors from '../../../constants/colors';

export const Arrow = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 3vmin;
    width: 3vmin;
    border-radius: 50%;
    font-size: 2.5vmin;
    border: none;
    margin: .3vmin;
    padding: 0 .4vmin;
    padding-bottom: .7vmin;
    color: ${colors.darkPokedex};
    box-shadow: inset .1vmin -.2vmin .4vmin .1vmin ${colors.dark};
    background: ${colors.pokedex};

    &:active {
        box-shadow: inset -.1vmin .2vmin .2vmin .1vmin ${colors.dark};
    }
    
    &:disabled {
        color: ${colors.darkPokedex};
    }
`;
