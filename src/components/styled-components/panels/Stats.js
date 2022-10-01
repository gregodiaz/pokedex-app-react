import styled from 'styled-components';

import colors from '../../../constants/colors'

const Stats= styled.div`
    position: absolute;
    height: 4.5vmin;
    width: 11vmin;
    border-radius: 5px;
    font-size: 3vmin ;
    font-weight: bold ;
    text-align: center ;
    font-family:'Titillium Web';

    background: ${colors.lightBlue};
    border: .3vmin solid ${colors.blue};
    color: ${colors.dark};

    top: ${props => props.top};
    left: ${props => props.left};
`;

export default Stats;
