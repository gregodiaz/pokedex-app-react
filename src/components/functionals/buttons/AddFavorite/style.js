import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import colors from '../../../../constants/colors';

const Button = styled.button`
    cursor: pointer;
    margin: 1vmin;
    background: #00000000;
    border-radius: .3vmin;
    border: none;
    font-size: 3vmin;
    font-weight: bold;

    color: ${props => props.theme.fg};
`;

const defaultTheme = {
    fg: colors.firebrick,
};

const favTheme = {
    fg: colors.yellow,
}

export const ButtonStyled = ({ children, onClick, theme = '' }) =>
    <ThemeProvider theme={!theme ? defaultTheme : favTheme}>
        <Button onClick={() => onClick()}>
            {children}
        </Button>
    </ThemeProvider>

export default ButtonStyled;
