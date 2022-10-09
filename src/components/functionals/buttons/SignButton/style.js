import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import colors from '../../../../constants/colors';

const Button = styled.button`
    cursor: pointer;
    margin: 1vmin;
    min-width: 15vmin;
    border-radius: .3vmin;
    font-size: 3vmin;
    font-weight: bold;

    color: ${props => props.theme.fg};
    border: .4vmin solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};
`;

const defaultTheme = {
    fg: colors.darkred,
    bg: colors.firebrick,
};

const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
});

export const ButtonStyled = ({ children, onClick, theme = '' }) =>
    <ThemeProvider theme={!theme ? defaultTheme : invertTheme(defaultTheme)}>
        <Button
            onClick={()=>onClick()}
        >{children}</Button>
    </ThemeProvider>

export default ButtonStyled;
