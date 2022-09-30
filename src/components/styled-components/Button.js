import styled from 'styled-components';

const Button = styled.button`
    position: absolute;
    cursor: pointer;
    background: #00000000;
    height: 58px;
    width: 58px;
    border-radius: 50%;

    background: ${props => props.bgColor};
    height: ${props => props.size};
    width: ${props => props.size};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};

    top: ${props => props.top};
    left: ${props => props.left};
`;

export default Button;
