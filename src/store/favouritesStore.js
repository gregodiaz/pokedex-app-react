import create from 'zustand';

import { backApiUrl } from '../constants/urls';

const favouritesStore = create((set, get) => ({
    favourites: [],
    loaded: false,

    fetchFavourites: async (user_id, token) => {
        const res = await fetch(`${backApiUrl}/v1/favourites`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const { data } = await res.json()
        const favouriteList = data.filter(favourite => favourite.user_id === user_id)

        set({ favourites: favouriteList })
        set({ loaded: true })
    },

    deleteFavourite: async (id, token) => {
        await fetch(`${backApiUrl}/v1/favourites/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
    }
}));

export default favouritesStore;
