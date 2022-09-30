import styled from 'styled-components';

import colors from '../../constants/colors'

const Search = styled.input`
    height: 44px;
    padding-right: 10px;
    position: absolute;
    border: 2px solid gray;
    border-radius: 5px;
    text-align: right;
    font-size: 1.5rem;
    font-family:'Titillium Web';

    background: ${colors.lightGreen};
    color: ${colors.darkGreen};

    width: ${props => props.w};
    top: ${props => props.top};
    left: ${props => props.left};
    font-size: ${props => props.fontSize};

    &:focus {
        // outline: none;
    }
    
    ::placeholder {
        color: ${colors.darkGreen};
        font-weight: bold;
    }
`;

export default Search;
