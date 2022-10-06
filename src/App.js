import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BackgroundTemplate from './components/presentionals/BackgroundTemplate';
import Main from './components/presentionals/Main';
import Login from './components/functionals/Login';
import Register from './components/functionals/Register';

function App() {
    return (
        <BackgroundTemplate>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/pokedex-app-react" element={<Main />} />
                    <Route exact path="/pokedex-app-react/login" element={<Login />} />
                    <Route exact path="/pokedex-app-react/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </BackgroundTemplate>
    );
}

export default App;
