import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Table } from './style';

import favouritesStore from '../../../store/favouritesStore';
import pokemonStore from '../../../store/pokemonStore';
import userStore from '../../../store/userStore';

export default function Favourites() {
    const { favourites, loaded, fetchFavourites, deleteFavourite } = favouritesStore()
    const { fetchPokemon } = pokemonStore()
    const { id: user_id, token } = userStore()

    const navigate = useNavigate();

    const fetchFavouritesList = async () => {
        await fetchFavourites(user_id, token)
    }

    const deleteFav = async (id) => {
        await deleteFavourite(id, token)
        await fetchFavourites(user_id, token)
    }

    const handleDelete = async id => {
        if (window.confirm('Do you want to delete the pokemon from your favourites list?')) deleteFav(id);
    }

    const handleClick = async id => {
        await fetchPokemon(id)
        navigate('/pokedex-app-react')
    }

    useEffect(() => {
        if (!token) navigate('/pokedex-app-react');
        fetchFavouritesList();
    }, [])

    return (
        <Table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>delete</td>
                </tr>
            </thead>
            <tbody>
                {
                    loaded ?
                        favourites.map(favourite => (
                            <tr key={favourite.id}>
                                <td id={favourite.pokemon_id} onClick={({ target }) => handleClick(target.id)}>{favourite.pokemon_id}</td>
                                <td id={favourite.pokemon_id} onClick={({ target }) => handleClick(target.id)}>{favourite.name}</td>
                                <td><button id={favourite.id} onClick={({ target }) => handleDelete(target.id)}>Delete</button></td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                }
            </tbody>
        </Table>
    )
};
