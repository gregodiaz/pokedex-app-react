import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Table } from './style';

import userStore from '../../../store/userStore';
import pokemonStore from '../../../store/pokemonStore';

const baseUrl = 'http://localhost:8000/api/';

export default function Favourites() {
    const { id: user_id, token } = userStore()
    const { fetchPokemon } = pokemonStore()

    const navigate = useNavigate();

    const [favourites, setFavourites] = useState([])
    const [loaded, setLoaded] = useState(false)

    const fetchFavouritesList = async () => {
        const res = await fetch(baseUrl + 'v1/favourites', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const { data } = await res.json()
        const favouriteList = data.filter(favourite => favourite.user_id === user_id)

        setFavourites(favouriteList)
        setLoaded(true)
    }

    const deleteFav = async id => {
        await fetch(baseUrl + `v1/favourites/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        await fetchFavouritesList()
    }

    const handleDelete = async id => {
        if (window.confirm('Do you want to delete the pokemon from your favourites list?'))
            deleteFav(id);
    }

    const handleClick = async id => {
        console.log(id)
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
                    <td>name</td>
                </tr>
            </thead>
            <tbody>
                {
                    loaded ?
                        favourites.map(favourite => (
                            <tr id={favourite.pokemon_id} onClick={({ target }) => handleClick(target.id)}>
                                <td>{favourite.pokemon_id}</td>
                                <td>{favourite.name}</td>
                                <td><button id={favourite.id} onClick={({ target }) => handleDelete(target.id)}>Delete</button></td>
                            </tr>
                        )) : ''
                }
            </tbody>
        </Table>
    )
};
