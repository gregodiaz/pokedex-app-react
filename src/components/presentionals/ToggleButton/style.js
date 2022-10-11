import styled from 'styled-components';

import colors from '../../../constants/colors';

export const Toggle = styled.button`
    position: absolute;
    cursor: pointer;
    background: #00000000;
    height: 5vmin;
    width: 5vmin;
    border-radius: 50%;
    font-size: 2.7vmin;
    font-weight: bold;
    border: none;
    padding-top: 0;

    background: ${props => props.background};
    font-size: ${props => props.fontSize + 'vmin'};
    height: ${props => props.size + 'vmin'};
    width: ${props => props.size + 'vmin'};

    top: ${props => props.top - props.theme.top + 'vmin'};
    left: ${props => props.left - props.theme.left + 'vmin'};

    color: ${props => props.theme.color};
    filter: brightness(${props => props.theme.brightness}); 
    box-shadow: ${props => props.theme.boxShadow};
`;

export const off = {
    top: 0,
    left: 0,
    color: colors.darkBlue,
    brightness: .5,
    boxShadow: `-.3vmin .4vmin 0 .1vmin ${colors.darkBlue}`
};

export const on = {
    top: -.3,
    left: .4,
    color: colors.white,
    brightness: 1.5,
    boxShadow: `0 0 .7vmin ${colors.white}`,
};
