import styled from 'styled-components';

import colors from '../../../constants/colors';

const Bar = styled.div`
    display: flex;
    font-family:'Titillium Web';
    font-size: 3vmin;
    font-weight: bold ;
    items-align: center;
    justify-content: space-between;
    position: fixed;
    text-align: center ;
    top: 0;
    width: 100vw;

    background: ${colors.darkPokedex};
    box-shadow: 0 .05vmin 2vmin 0vmin ${colors.sky};
    color: ${colors.firebrick};

    span {
        margin: 1vmin;
        padding: .5vmin;
    }
`;

export default Bar;
