import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Body/Home/Home";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
