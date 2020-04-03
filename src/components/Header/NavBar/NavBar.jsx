import React from "react";
import style from './NavBar.module.css'
import Avatar from "../Avatar/Avatar";

const NavBar = () => {
    return (
        <nav className={style.main_header}>
            <div className={style.main_inner}>
                <Avatar/>
                <ul className={style.main_header_menu}>
                    <li><a className={style.active} href=""><span>home</span></a></li>
                    <li><a href=""><span>about</span></a></li>
                    <li><a href=""><span>portfolio</span></a></li>
                    <li><a href=""><span>contact</span></a></li>
                </ul>
                <p className={style.main_header_copyright}>Все права защищены</p>
            </div>
        </nav>
    );
}

export default NavBar;