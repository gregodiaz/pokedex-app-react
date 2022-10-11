import styled from 'styled-components';

import colors from '../../../../constants/colors'

const Stats= styled.div`
    border-radius: .2vmin;
    font-family:'Titillium Web';
    font-size: 2vmin ;
    font-weight: bold ;
    height: 6.5vmin;
    text-align: center ;
    width: 5.5vmin;

    background: ${colors.lightBlue};
    border: .3vmin solid ${colors.blue};
    color: ${colors.dark};
    filter: brightness(${props => props.brightness}); 

    p { 
        margin: 0;
    }
`;

export default Stats;
