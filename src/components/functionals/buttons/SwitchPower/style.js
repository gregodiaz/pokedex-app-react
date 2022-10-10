import styled from 'styled-components';

import colors from '../../../../constants/colors'

export const Power = styled.button`
    position: absolute;
    cursor: pointer;
    background: ${colors.firebrick};
    height: 5vmin;
    width: 5vmin;
    border-radius: 50%;
    font-size: 2.7vmin;
    font-weight: bold;
    border: none;
    padding-top: 0;

    height: ${props => props.size};
    width: ${props => props.size};

    top: ${props => props.top - props.theme.top + 'vmin'};
    left: ${props => props.left - props.theme.left + 'vmin'};

    color: ${props => props.theme.color};
    filter: brightness(${props => props.theme.brightness}); 
    box-shadow: ${props => props.theme.boxShadow};
`;

export const off = {
    top: 0,
    left: 0,
    color: colors.dark,
    brightness: .5,
    boxShadow: `-.3vmin .4vmin 0 .1vmin ${colors.dark}`,
};

export const on = {
    top: -.3,
    left: .4,
    color: colors.light,
    brightness: 2,
    boxShadow: '0 0 .7vmin #ffffff60',
};
