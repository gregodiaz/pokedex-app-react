import styled from 'styled-components';

import colors from '../../constants/colors'

const StatsPanel = styled.div`
    position: absolute;
    height: 44px;
    width: 100px;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 1.5rem ;
    font-weight: bold ;
    text-align: center ;
    font-family:'Titillium Web';

    background: ${colors.lightBlue};
    border: 1px solid ${colors.blue};
    color: ${colors.dark};

    top: ${props => props.top};
    left: ${props => props.left};
    height: ${props => props.h};
    width: ${props => props.w};
    background: ${props => props.bgColor};
    overflow: ${props => props.overflow};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign};
    border: 1px solid ${props => props.borderColor};
`;

export default StatsPanel;
