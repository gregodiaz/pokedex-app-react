import styled from 'styled-components';

const Sprite = styled.img`
    position: absolute;
    height: 19vmin;
    width: 19vmin;
    transform: translate(-50%,-50%);

    top: ${props => props.top};
    left: ${props => props.left};
`;

export default Sprite;
