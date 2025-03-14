/* eslint-disable no-unused-vars */

export class UserHelper {
    static user = {
        isConnected: false,
    }

    static endpoint = "http://localhost:5173"


    static async submitDataReq(route, content) {
        try {
            const res = fetch(`${this.endpoint}${route}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            return await res.json()
        } catch (e) {
            console.error(e)
        }
    }

    static async fetchDataRes(route) {
        fetch(`${this.endpoint}${route}`)
            .then(r => r.json())
            .catch(e => console.error(e))
    }

    static async signUp(context, email, password, passwordConfirm) {
        if (!email.include('@gmail') || !email.include('@hotmail') || !email.include('@libero')) {
            console.error('Not a valid email')
            return context
        }
        if (password < 8) {
            console.error("make it better")
            return context
        }
        if (password !== passwordConfirm) {
            console.error("Wrong Password")
            return context
        }

        const ctx = this.submitDataReq('User', {
            id: crypto.randomUUID(),
            email: email,
            password: password,
        })

        context = {...ctx}
    }

}