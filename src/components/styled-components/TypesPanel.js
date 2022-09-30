import styled from 'styled-components';

import colors from '../../constants/colors'

const TypesPanel = styled.div`
    position: absolute;
    height: 43px;
    width: 169px;
    border-radius: 5px;
    font-size: 1.5rem ;
    font-weight: bold ;
    text-align: center ;
    font-family:'Titillium Web';

    background: ${colors.light};
    border: 1px solid ${colors.dark};
    color: ${colors.dark};

    top: ${props => props.top};
    left: ${props => props.left};
`;

export default TypesPanel;
