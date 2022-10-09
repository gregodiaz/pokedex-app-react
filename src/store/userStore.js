import create from "zustand";

const baseUrl = 'http://localhost:8000/api/';

const userStore = create(set => ({
    id: 0,
    name: '',
    email: '',

    token: '',

    setUser: (id, name, email, token) => set({ id, name, email, token }),

    login: async credentials => {
        const res = await fetch(baseUrl + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(credentials)
        });

        const data = await res.json()
        if (!data.token) return data;

        const sessionCredentials = window.sessionStorage.getItem('credentials');
        if (!sessionCredentials) window.sessionStorage.setItem('credentials', JSON.stringify(credentials));

        const { token, user } = data
        const { id, name, email } = user[0]

        set({ id, name, email, token })
    },

    register: async credentials => {
        const res = await fetch(baseUrl + 'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(credentials)
        });

        const data = await res.json()
        if (!data.token) return data;

        const sessionCredentials = window.sessionStorage.getItem('credentials');
        if (!sessionCredentials) window.sessionStorage.setItem('credentials', JSON.stringify(credentials));

        const { token, user } = data
        const { id, name, email } = user

        set({ id, name, email, token })
    },

    logout: () => {
        window.sessionStorage.clear()
        set({ id: 0, name: '', email: '', token: '' })
    },
}));

export default userStore;
