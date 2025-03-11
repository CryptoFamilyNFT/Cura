/* eslint-disable no-unused-vars */

export class UserHelper {
    static user = {
        isConnected: false,
        data: null
    }

    static endpoint = "http://localhost:5173"


    static async fetchDataRes(route) { 
        fetch(`${this.endpoint}${route}`)
            .then(r => r.json())
            .catch(e => console.error(e))
    }

    static async signUp(email, password, passwordConfirm) {
        if (!email.include('@gmail') || !email.include('@hotmail') || !email.include('@libero')) {
            console.error('Not a valid email')
        }
        if (password < 8) {
            console.error("make it better")
        }
        if (password !== passwordConfirm) {
            console.error("Wrong Password")
        }


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