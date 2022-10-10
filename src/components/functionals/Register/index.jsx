import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthTemplate from '../../presentionals/AuthTemplate';
import DefaultTemplate from '../../presentionals/DefaultTemplate';

import userStore from '../../../store/userStore';

export default function Login() {
    const { register } = userStore()
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

    const handleSubmit = event => {
        event.preventDefault()
        if (!body.name || !body.password || !body.password_confirmation || !body.email) return;
        handleRegister(body)
    }

    const handleRegister = async credentials => {
        try {
            const data = await register(credentials)
            if (data) return setErrors(JSON.parse(data));
            navigate('/pokedex-app-react')
        } catch (error) {
            console.log(error)
            setErrors({ email: ['The server is not running'] })
        }
    }

    return (
        <DefaultTemplate >
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
                            {errors.password ?
                                <div>
                                    {errors.password.map(error => (
                                        <div>
                                            {error}
                                        </div>
                                    ))}

                                </div>
                                : ''}
                        </>
                        : ''
                }
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='name' onChange={handleChange} required />
                    <input type='password' name='password' placeholder='password' onChange={handleChange} required />
                    <input type='password' name='password_confirmation' placeholder='confirm password' onChange={handleChange} required />
                    <input type='email' name='email' placeholder='email' onChange={handleChange} required />
                    <button>Register</button>
                </form>

                <p>
                    {'Have an account? '}
                    <span onClick={() => navigate('/pokedex-app-react/login')}>
                        Login!
                    </span>
                </p>
            </AuthTemplate>
        </DefaultTemplate >
    )
};
