import styled from 'styled-components';

export const Arrow = styled.button`
    position: absolute;
    cursor: pointer;
    background: #00000000;
    height: 4vmin;
    width: 4vmin;
    border-radius: .5vmin;
    background-size: contain;
    font-size: 2vmin;
    font-weight: bold;
    border: none;
    padding-top: 0;
    box-shadow: -.3vmin .4vmin 0 .1vmin black;

    height: ${props => props.size};
    width: ${props => props.size};

    top: ${props => props.top + 'vmin'};
    left: ${props => props.left + 'vmin'};

    color: ${props => props.color};
    background: ${props => `url(${props.img})`};
    background-image: ${props => `url(${props.image})`};
    background: ${props => props.background};

    &:active {
        box-shadow: 0 0;
        top: ${props => props.top + .3 + 'vmin'};
        left: ${props => props.left - .4 + 'vmin'};
    }
    
    &:disabled {
        color: black;
    }
`;
