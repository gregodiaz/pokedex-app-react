import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/functionals/Login';
import Main from './components/presentionals/Main';
import Profile from './components/functionals/Profile';
import Register from './components/functionals/Register';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/pokedex-app-react' element={<Main />} />
                <Route exact path='/pokedex-app-react/login' element={<Login />} />
                <Route exact path='/pokedex-app-react/register' element={<Register />} />
                <Route exact path='/pokedex-app-react/profile' element={<Profile />} />
            </Routes>
        </Router>
    );
};
