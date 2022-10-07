import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthTemplate from '../../presentionals/AuthTemplate';
import NavBar from '../../functionals/NavBar';

import userStore from '../../../store/userStore';

export default function Login() {
    const { setUser } = userStore()
    const navigate = useNavigate()

    const [error, setError] = useState('')

    const [body, setBody] = useState({
        email: '',
        password: '',
    })

    const baseUrl = 'http://localhost:8000/api/login';

    const handleChange = event => setBody({ ...body, [event.target.name]: event.target.value })

    const handleClick = async () => {
        if (!body.email || !body.password) return;

        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body)
        });

        const data = await res.json()

        if (data.error) return setError(data.error);

        const { token, user } = data
        const { id, name, email } = user[0]

        setUser(id, name, email, token)
        navigate('/pokedex-app-react')
    }

    return (
        <>
            <NavBar />
            <AuthTemplate>
                {
                    error ?
                        <div>
                            {error}
                        </div> :
                        ''
                }
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" name="email" placeholder="email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="password" onChange={handleChange} required />
                    <button onClick={() => handleClick()}>Send</button>
                </form>

                <p>
                    Dont have an account? <a href="/pokedex-app-react/register">Register!</a>
                </p>
            </AuthTemplate>
        </>
    )
};
