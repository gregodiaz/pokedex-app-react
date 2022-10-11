import styled from 'styled-components';

import colors from '../../../constants/colors';

export const Inner = styled.div`
    background: ${colors.darkGray};
    border-radius: .4vmin;
    box-shadow: inset -.3vmin .2vmin ${colors.dimGray};
    display: flex;
    margin-left: .3vmin;
    margin-right: .5vmin;
    padding-bottom: 0vmin;
    padding: .3vmin;
    position: absolute;

    top: ${props => props.top + 'vmin'};
    left: ${props => props.left + 'vmin'};
`;

