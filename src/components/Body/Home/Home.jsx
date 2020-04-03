import React from "react";
import style from './Home.module.css'
import {faGithub, faTelegramPlane, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Home = () => {
    return (
        <div className={style.main_home}>
            <div className={style.main_home_content}>
                <h1>Привет, меня зовут <span className={style.main_color}>Сергей Неплашов</span></h1>
                <p>Я front-end разработчик</p>
                <ul className={`${style.main_social} ${style.main_social_bordered}`}>
                    <li><a href=""><FontAwesomeIcon icon={faTelegramPlane} size="2x"/></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/sergey-neplashov-8722a6171/"><FontAwesomeIcon icon={faLinkedinIn} size="2x"/></a></li>
                    <li><a target="_blank" href="https://github.com/Znichu"><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
                </ul>
            </div>
        </div>

    );
}
export default Home;