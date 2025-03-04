/* eslint-disable no-unused-vars */
import { useTheme } from "@mui/material";
import { darkTheme, theme } from "../theme/theme";

export class UserHelper {
    static user = {
        isConnected: false,
        data: null
    }

    static initUser(context) {
        // qui gestiamo l'inizializzazione dell'utente e salviamo i dati nel context
        const data = {
            name: 'Mario',
            surname: 'Rossi',
            email: 'mario@gmail.com'
        }
        context = { ...context, data: data };
    }
}