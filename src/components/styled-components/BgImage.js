import styled from 'styled-components';

const BgImage = styled.img`
    position: ${props => props.position};
    height: ${props => props.h};
    width: ${props => props.w};
`;

export default BgImage;
