import styled from 'styled-components';

import colors from '../../constants/colors'

const InfoPanel = styled.div`
    position: absolute;
    height: 5vmin;
    width: 33vmin;
    border-radius: 5px;
    top: 19.5vmin;
    left: 53vmin;
    font-size: 3vmin;
    font-weight: bold ;
    font-family:'Titillium Web';
    text-align: center ;
    overflow: scroll;

    background: ${colors.darkGreen};
    border: .3vmin solid ${colors.yellow};
    color: ${colors.yellow};

    top: ${props => props.top};
    height: ${props => props.h};
    text-align: ${props => props.textAlign};
    padding-left: ${props => props.pl};
`;

export default InfoPanel;
