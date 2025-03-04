/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createTheme } from "@mui/material";
import { green, purple } from '@mui/material/colors';

const baseTheme = {
    palette: {
        primary: {
            main: purple[500],
            light: purple[300],
            dark: purple[700],
        },
        secondary: {
            main: green[500],
            light: green[300],
            dark: green[700],
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
};

export const createAppTheme = (mode) => createTheme({
    ...baseTheme,
    palette: {
        ...baseTheme.palette,
        mode: mode,
        primary: mode === 'dark' ? green : purple,
        secondary: mode === 'dark' ? purple : green,
    },
});