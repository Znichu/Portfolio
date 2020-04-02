import React from "react";
import style from './NavBar.module.css'
import Avatar from "../Avatar/Avatar";

const NavBar = () => {
    return (
        <nav className={style.main_nav}>
            <Avatar />
            <ul className={style.main_header_menu}>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">PORTFOLIO</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
            <p className={style.main_header_copyright}>Все права защищены</p>
        </nav>
    );
}
export default NavBar;