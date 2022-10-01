import styled from 'styled-components';

import colors from '../../../constants/colors'

const Types= styled.div`
    position: absolute;
    height: 3.5vmin;
    width: 18vmin;
    border-radius: 5px;
    font-size: 2.5vmin;
    font-weight: bold ;
    text-align: center ;
    font-family:'Titillium Web';

    background: ${colors.light};
    border: 1px solid ${colors.dark};
    color: ${colors.dark};

    top: ${props => props.top};
    left: ${props => props.left};
`;

export default Types;
