import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App App-header">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
