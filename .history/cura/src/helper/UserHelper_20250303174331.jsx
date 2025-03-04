/* eslint-disable no-unused-vars */
import { useTheme } from "@mui/material";
import { darkTheme, theme } from "../theme/theme";

export class UserHelper {
    static light = theme;
    static dark = darkTheme;

    static setTheme(theme, context) {
        if (theme === 'light') {
            context = { ...context, theme: this.light }
        } else {
            context = { ...context, theme: this.dark }
        }
        return context
    }
}