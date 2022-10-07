import styled from 'styled-components';
import colors from '../../../../constants/colors';

const Button = styled.button`
    cursor: pointer;
    background: #00000000;
    height: 4vmin;
    width: auto;
    margin: 1vmin;
    padding-left: 1vmin;
    padding-right: 1vmin;
    border-radius: .3vmin;
    font-size: 2vmin;
    font-weight: bold;
    border: .3vmin solid darkred;
    color: darkred;

    color: ${props => props.color};
    background: ${props => props.background};
`;

export default Button;
