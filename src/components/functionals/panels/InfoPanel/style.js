import styled from 'styled-components';

import colors from '../../../../constants/colors'

const Info = styled.div`
    border-radius: .3vmin;
    font-family:'Titillium Web';
    font-size: 3vmin;
    font-weight: bold ;
    height: 5vmin;
    left: 53vmin;
    text-align: center ;
    top: 19.5vmin;
    width: 33vmin;

    background: ${colors.darkGreen};
    border: .3vmin solid ${colors.yellow};
    color: ${colors.yellow};

    filter: brightness(${props => props.brightness}); 
    height: ${props => props.h};
    overflow: ${props => props.overflow};
    padding-left: ${props => props.pl};
    text-align: ${props => props.textAlign};
    top: ${props => props.top};
`;

export default Info;
