import styled from 'styled-components';

import colors from '../../../constants/colors';

export const Table = styled.table`
    font-family:'Titillium Web';
    font-size: 3vmin;
    font-weight: bold ;
    width: 100%;

    background: ${colors.sky};

    tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5vmin;
        margin: .5vmin;
        padding: 3vmin;
        background: ${colors.lightBlue};
    }
    
    td {
        padding: 0vmin 3vmin;
    }
`;
