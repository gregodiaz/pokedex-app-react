import styled from 'styled-components';

import colors from '../../../../constants/colors'

const Search = styled.input`
    border-radius: 5px;
    border: .1vmin solid gray;
    font-family: 'Titillium Web';
    font-size: 3.5vmin;
    height: 4.3vmin;
    left: 7vmin;
    padding-right: .5vmin;
    position: absolute;
    text-align: right;
    top: 54vmin;
    width: 20vmin;

    background: ${colors.lightGreen};
    color: ${colors.darkGreen};

    &:focus {
        outline: .3vmin solid ${colors.darkGreen};
    }
    
    ::placeholder {
        color: ${colors.darkGreen};
        font-weight: bold;
    }
`;

export default Search;

