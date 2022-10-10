import styled from 'styled-components';

import colors from '../../../constants/colors';

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
    flex-direcction: column;
    font-size: 3vmin;
    font-weight: bold ;
    width: 95vw;
    height: 85vh;
    padding: 1vh;
    margin-top: 5vh;

    box-shadow: 0 .05vmin 1vmin 0vmin ${colors.sky};
    background: ${colors.darkPokedex};
`
export const DivInt = styled.div`
    font-size: 3vmin;
    font-weight: bold ;
    margin: 1vmin;
    width: ${props => props.width};

    background: ${colors.firebrick};
`;;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vmin;
    font-weight: bold ;
    padding: 1vmin;
    margin: 1vmin;
    width: auto;

    background: ${colors.yellow};
`;
