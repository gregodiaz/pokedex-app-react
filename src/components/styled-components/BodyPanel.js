import styled from 'styled-components';

import colors from '../../constants/colors'

const BodyPanel = styled.div`
    position: absolute;
    height: 43px;
    width: 150px;
    border-radius: 5px;
    font-size: 1.5rem ;
    font-weight: bold ;
    text-align: center ;
    font-family:'Titillium Web';

    background: ${colors.darkGreen};
    border: 1px solid ${colors.yellow};
    color: ${colors.yellow};

    top: ${props => props.top};
    left: ${props => props.left};
`;

export default BodyPanel;
