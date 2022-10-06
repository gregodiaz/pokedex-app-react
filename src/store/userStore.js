import create from "zustand";

const userStore = create(set => ({
    id: 0,
    name: '',
    email: '',

    token: '',

    setUser: (id, name, email, token) => set({ id, name, email, token })
}));

export default userStore;
