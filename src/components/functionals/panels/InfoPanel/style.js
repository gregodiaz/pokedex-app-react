import styled from 'styled-components';

import colors from '../../../../constants/colors'

const Info = styled.div`
    border-radius: 5px;
    font-family:'Titillium Web';
    font-size: 3vmin;
    font-weight: bold ;
    height: 5vmin;
    left: 53vmin;
    position: absolute;
    text-align: center ;
    top: 19.5vmin;
    width: 33vmin;

    background: ${colors.darkGreen};
    border: .3vmin solid ${colors.yellow};
    color: ${colors.yellow};

    top: ${props => props.top};
    overflow: ${props => props.overflow};
    height: ${props => props.h};
    text-align: ${props => props.textAlign};
    padding-left: ${props => props.pl};
`;

export default Info;
