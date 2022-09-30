import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/presentionals/Main';
import './App.css';

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
