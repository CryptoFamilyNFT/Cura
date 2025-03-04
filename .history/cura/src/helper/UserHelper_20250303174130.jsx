/* eslint-disable no-unused-vars */
import { useTheme } from "@mui/material";

export class UserHelper {
    theme = 'light'

    static setTheme(theme, context) {
        this.theme = theme
        context = {...context, theme: theme}
    }
}