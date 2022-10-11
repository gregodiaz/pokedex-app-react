import styled from 'styled-components';

import colors from '../../../../constants/colors'

const Search = styled.input`
    border-radius: .2vmin;
    font-family: 'Titillium Web';
    font-size: 3.5vmin;
    height: 4.3vmin;
    left: 17vmin;
    padding-right: .5vmin;
    text-align: right;
    top: 49vmin;
    width: 10vmin;

    background: ${colors.lightGreen};
    border: .1vmin solid ${colors.gray};
    box-shadow: inset -.2vmin .1vmin .2vmin ${colors.darkGreen};
    color: ${colors.darkGreen};

    filter: brightness(${props => props.brightness}); 

    &:focus {
        outline: .1vmin solid ${colors.darkGreen};
    }
    
    ::placeholder {
        color: ${colors.darkGreen};
        font-weight: bold;
    }
`;

export default Search;
