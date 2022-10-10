import React, { useEffect, useState } from 'react';

import Button from './style';

import favouritesStore from '../../../../store/favouritesStore';
import pokemonStore from '../../../../store/pokemonStore';
import userStore from '../../../../store/userStore';

import { backApiUrl } from '../../../../constants/urls';

export default function AddFav() {
    const { favourites, fetchFavourites } = favouritesStore()
    const { pokemon } = pokemonStore();
    const { id: user_id, token } = userStore();

    const [isFav, setIsFav] = useState(false)

    const fetchFavouritesList = async () => {
        await fetchFavourites(user_id, token)
    }

    const favPokemon = async () => {
        const body = {
            'name': pokemon.name,
            'user_id': user_id,
            'pokemon_id': pokemon.id,
        }


        if (isFav) return;
        else {
            await fetch(`${backApiUrl}/v1/favourites`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(body)
            })
        }

        setIsFav(!isFav)
    }

    useEffect(() => {
        fetchFavouritesList();
        setIsFav(favourites.find(favourite => favourite.pokemon_id == pokemon.id))
    }, [pokemon.id, user_id])

    return (
        <Button
            theme={isFav}
            disabled={isFav}
            onClick={() => favPokemon()}
        >
            {
                isFav ?
                    '' :
                    'add to'
            } fav ★
        </Button>
    )
};

