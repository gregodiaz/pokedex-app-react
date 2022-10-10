import create from 'zustand';

import { backApiUrl } from '../constants/urls';

const userStore = create(set => ({
    id: 0,
    name: '',
    email: '',
    token: '',

    setUser: (id, name, email, token) => set({ id, name, email, token }),

    login: async credentials => {
        const res = await fetch(`${backApiUrl}/login`, {
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
        const res = await fetch(`${backApiUrl}/register`, {
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
