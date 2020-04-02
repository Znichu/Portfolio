import React from "react";
import style from './Avatar.module.css'
import Ava from '../../../img/ava.jpg'



const Avatar = () => {
    return (
        <div className={style.main_header_avatar}>
            <a href="#">
                <img src={Ava} alt="main-image"/>
            </a>
        </div>
    );
}

export default Avatar;