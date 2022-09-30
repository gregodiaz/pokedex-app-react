import styled from 'styled-components';

const Sprite = styled.img`
    position: absolute;
    height: 190px;
    width: 190px;
    transform: translate(-50%,-50%);
    // min-height: 150px;
    // min-width: 150px;
    // max-height: 190px;
    // max-width: 190px;

    top: ${props => props.top};
    left: ${props => props.left};
`;

export default Sprite;
