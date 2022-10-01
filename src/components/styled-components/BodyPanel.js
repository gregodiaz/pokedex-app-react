import styled from 'styled-components';

import colors from '../../constants/colors'

const BodyPanel = styled.div`
    position: absolute;
    height: 3.5vmin;
    width: 16vmin;
    border-radius: .7vmin;
    font-size: 2vmin;
    font-weight: bold ;
    text-align: center ;
    font-family:'Titillium Web';

    background: ${colors.darkGreen};
    border: .3vmin solid ${colors.yellow};
    color: ${colors.yellow};

    top: ${props => props.top};
    left: ${props => props.left};
`;

export default BodyPanel;
