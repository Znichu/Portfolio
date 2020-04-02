import React from "react";
import style from './Heade.module.css'
import NavBar from "./NavBar/NavBar";


const Header = () => {
    return (
        <div className="main_header">
            <div className="main_inner">
                <NavBar />
            </div>
        </div>
    );
}

export default Header;