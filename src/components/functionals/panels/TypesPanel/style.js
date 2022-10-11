import styled from 'styled-components';

import colors from '../../../../constants/colors';

const Types= styled.div`
    align-items: center ;
    border-radius: .3vmin;
    display: flex;
    font-family:'Titillium Web';
    font-size: 2.5vmin;
    font-weight: bold ;
    height: 3vmin;
    justify-content: center;
    width: 18vmin;
    overflow: hidden;

    background: ${colors.sky};
    border: .01vmin solid ${colors.blue};
    color: ${colors.dark};
    filter: brightness(${props => props.brightness}); 

    left: ${props => props.left};
    top: ${props => props.top};
`;

export default Types;
