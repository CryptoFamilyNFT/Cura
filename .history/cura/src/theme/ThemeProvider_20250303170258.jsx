import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export default function CuraThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}