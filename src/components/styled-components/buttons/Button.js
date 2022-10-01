import styled from 'styled-components';

const Button = styled.button`
    position: absolute;
    cursor: pointer;
    background: #00000000;
    height: 6vmin;
    width: 6vmin;
    border-radius: 50%;
    font-size: 2.7vmin;
    font-weight: bold;
    border: none;
    padding-top: 0;

    background: ${props => props.bgColor};
    height: ${props => props.size};
    width: ${props => props.size};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
    color: ${props => props.color};
    filter: brightness(${props => props.brightness}); 

    top: ${props => props.top};
    left: ${props => props.left};
`;

export default Button;
