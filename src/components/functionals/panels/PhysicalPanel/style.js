import styled from 'styled-components';

import colors from '../../../../constants/colors';

const Physical = styled.div`
    align-items: center ;
    border-radius: .7vmin;
    display: flex;
    font-family:'Titillium Web';
    font-size: 2.5vmin;
    font-weight: bold ;
    height: 5vmin;
    justify-content: center;
    overflow: hidden;
    width: 16vmin;

    background: ${colors.darkGreen};
    border: .3vmin solid ${colors.yellow};
    color: ${colors.yellow};
    filter: brightness(${props => props.brightness}); 
`;

export default Physical;
