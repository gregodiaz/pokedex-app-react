import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthTemplate from '../../presentionals/AuthTemplate';
import NavBar from '../../functionals/NavBar';

export default function Login() {
    const navigate = useNavigate()

    const [errors, setErrors] = useState('')

    const [body, setBody] = useState({
        name: '',
        password: '',
        password_confirmation: '',
        email: '',
    })

    const baseUrl = 'http://localhost:8000/api/register';

    const handleChange = event => setBody({ ...body, [event.target.name]: event.target.value })

    const handleClick = async () => {
        if (!body.name || !body.password || !body.password_confirmation || !body.email) return;

        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body)
        });

        const data = await res.json()

        console.log(data)
        if (!data.user) return setErrors(JSON.parse(data));

        navigate('/pokedex-app-react/login')
    }

    return (
        <>
            <NavBar />
            <AuthTemplate>
                {
                    errors ?
                        <>
                            <div>
                                {errors.email ?
                                    errors.email.map(error => (
                                        <div>
                                            {error}
                                        </div>
                                    ))
                                    : ''}
                            </div>
                            <div>
                                {errors.password ? 
                                    errors.password.map(error => (
                                        <div>
                                            {error}
                                        </div>
                                    ))

                                : ''}
                            </div>
                        </>
                        : ''
                }
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" name="name" placeholder="name" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="password" onChange={handleChange} required />
                    <input type="password" name="password_confirmation" placeholder="confirm password" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="email" onChange={handleChange} required />
                    <button onClick={() => handleClick()}>Register</button>
                </form>

                <p>
                    Have an account? <a href="/pokedex-app-react/login">Login!</a>
                </p>
            </AuthTemplate>
        </>
    )
};
