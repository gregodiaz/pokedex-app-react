import styled from 'styled-components';

import colors from '../../../constants/colors'

const Search = styled.input`
    height: 4.3vmin;
    padding-right: .5vmin;
    position: absolute;
    border: .1vmin solid gray;
    border-radius: 5px;
    text-align: right;
    font-size: 3.5vmin;
    font-family: 'Titillium Web';

    background: ${colors.lightGreen};
    color: ${colors.darkGreen};

    width: ${props => props.w};
    top: ${props => props.top};
    left: ${props => props.left};
    font-size: ${props => props.fontSize};

    &:focus {
        outline: .3vmin solid ${colors.darkGreen};
    }
    
    ::placeholder {
        color: ${colors.darkGreen};
        font-weight: bold;
    }
`;

export default Search;
