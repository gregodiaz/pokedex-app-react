import styled from 'styled-components';

import colors from '../../../constants/colors';

export const Outter = styled.div`
    background: ${colors.lightGray};
    border-radius: .5vmin;
    box-shadow: -.2vmin .2vmin 0 .2vmin ${colors.dimGray};
    display: flex;
    padding: .4vmin;
    position: absolute;

    top: ${props => props.top + 'vmin'};
    left: ${props => props.left + 'vmin'};
`;

export const Inner = styled.div`
    background: ${colors.darkGray};
    border-radius: .5vmin;
    box-shadow: inset -.1vmin .1vmin ${colors.dimGray};
    display: flex;
    margin-left: .3vmin;
    margin-right: .5vmin;
    padding-bottom: 0vmin;
    padding: .3vmin;
    position: relative;

    flex-direction: ${props => props.flexDir};
`;

