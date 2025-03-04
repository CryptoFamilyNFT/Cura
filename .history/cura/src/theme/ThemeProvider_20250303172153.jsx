import { ThemeProvider } from "@mui/material";

export default function CuraThemeProvider({ children, theme }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}