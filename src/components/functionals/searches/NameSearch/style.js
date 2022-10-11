import styled from 'styled-components';

import colors from '../../../../constants/colors'

const Search = styled.input`
    border-radius: .2vmin;
    font-family: 'Titillium Web';
    font-size: 3vmin;
    height: 4.3vmin;
    left: 8vmin;
    margin: 0;
    padding-right: .5vmin;
    padding: 0;
    text-align: right;
    top: 54vmin;
    width: 22vmin;

    background: ${colors.lightGreen};
    border: .1vmin solid ${colors.gray};
    box-shadow: inset -.2vmin .1vmin .2vmin ${colors.darkGreen};
    color: ${colors.darkGreen};

    filter: brightness(${props => props.brightness}); 

    &:focus {
        outline: .3vmin solid ${colors.darkGreen};
    }
    
    ::placeholder {
        color: ${colors.darkGreen};
        font-weight: bold;
    }
`;

export default Search;

