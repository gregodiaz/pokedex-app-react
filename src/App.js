import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Main from './components/presentionals/Main';

function App() {
    return (
        <div className="App App-header">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/pokedex-app-react" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
