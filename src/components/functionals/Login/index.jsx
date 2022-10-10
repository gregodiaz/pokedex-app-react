import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthTemplate from '../../presentionals/AuthTemplate';
import DefaultTemplate from '../../presentionals/DefaultTemplate';

import userStore from '../../../store/userStore';

export default function Login() {
    const { login } = userStore()
    const navigate = useNavigate()

    const [error, setError] = useState('')

    const [body, setBody] = useState({
        email: '',
        password: '',
    })

    const handleChange = ({ target }) => setBody({ ...body, [target.name]: target.value })

    const handleSubmit = event => {
        event.preventDefault()
        if (!body.email || !body.password) return;
        handleLogin(body)
    }

    const handleLogin = async credentials => {
        try {
            const data = await login(credentials)
            if (data) return setError(data.error);
            navigate('/pokedex-app-react')

        } catch (error) {
            console.log(error)
            setError('The server is not running')
        }
    }

    return (
        <DefaultTemplate>
            <AuthTemplate>
                {
                    error ?
                        <div>
                            {error}
                        </div> :
                        ''
                }
                <form onSubmit={handleSubmit}>
                    <input type='text' name='email' placeholder='email' onChange={handleChange} required />
                    <input type='password' name='password' placeholder='password' onChange={handleChange} required />
                    <button>Send</button>
                </form>

                <p>
                    {'Dont have an account? '}
                    <span onClick={() => navigate('/pokedex-app-react/register')}>
                        Register!
                    </span>
                </p>
            </AuthTemplate>
        </DefaultTemplate >
    )
};
