import styled from 'styled-components';

import colors from '../../../constants/colors';

const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    items-align: center;
    font-family:'Titillium Web';
    font-size: 3vmin;
    font-weight: bold ;
    position: absolute;
    text-align: center ;
    width: 100vw;

    box-shadow: 0 .05vmin 2vmin 0vmin ${colors.sky};
    // background: ${colors.firebrick};
    // color: ${colors.dark};
    background: ${colors.darkPokedex};
`;

export default Bar;
