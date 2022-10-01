import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/presentionals/Main';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/pokedex-app-react" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
