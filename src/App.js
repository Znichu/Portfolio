import React from 'react';
import './App.css';
import Header from "./Header/Header";
import MainBlock from "./MainBlock/MainBlock";
import SkilsBlock from "./SkilsBlock/SkilsBlock"
import MyProjects from './MyProgects/MyProgects';
import ContactMe from './ContactMe/ContactMe';


const App = () => {
    return (
        <div className="App">
            <Header/>
            <MainBlock/>
            <SkilsBlock />
            <MyProjects />
            <ContactMe />
        </div>
    );
}

export default App;
