import styled from 'styled-components';

import colors from '../../../constants/colors';

export const Table = styled.table`
    font-family:'Titillium Web';
    font-size: 3vmin;
    font-weight: bold ;
    width: 100%;

    background: ${colors.sky};

    tr {
        align-items: center;
        background: ${colors.lightBlue};
        display: flex;
        height: 5vmin;
        justify-content: space-between;
        margin: .5vmin;
        padding: 3vmin;
    }
    
    td {
        cursor: pointer
        padding: 0vmin 3vmin;
    }
`;
