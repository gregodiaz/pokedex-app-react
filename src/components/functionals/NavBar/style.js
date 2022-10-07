import styled from 'styled-components';

import colors from '../../../constants/colors';

const Bar = styled.div`
    display: flex;
    justify-content: end;
    items-align: center;
    font-family:'Titillium Web';
    font-size: 3vmin;
    font-weight: bold ;
    height: 7vmin;
    position: absolute;
    text-align: center ;
    width: 100vw;

    box-shadow: 0 .3vmin 9vmin 0vmin ${colors.sky};
    // background: ${colors.darkGreen};
    background: firebrick;
    color: ${colors.dark};
`;

export default Bar;
