/* eslint-disable no-unused-vars */
import { useTheme } from "@mui/material";

export class UserHelper {

    static setTheme(theme, context) {
        if (theme === 'light') {
            context = { ...context, theme: theme }
        } else {
            context = { ...context, theme: 'dark' }
        }
        return context
    }
}