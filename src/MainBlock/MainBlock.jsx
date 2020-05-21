import React from "react";
import style from './MainBlock.module.css'
import styleContainer from '../common/style/Container.module.css'
import {faGithub, faTelegramPlane, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import mainAvatar from '../common/img/ava.jpg'

const MainBlock = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.mainBlock__title}>
                    <h1>Hi, I am <span className={style.colorTheme}>Sergey Neplashov</span></h1>
                    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                    <ul className={`${style.mainSocial} ${style.mainSocialBordered}`}>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/Znichu"><FontAwesomeIcon icon={faTelegramPlane} size="lg"/></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sergey-neplashov-8722a6171/"><FontAwesomeIcon icon={faLinkedinIn} size="lg"/></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Znichu"><FontAwesomeIcon icon={faGithub} size="lg"/></a></li>
                    </ul>
                </div>
                <div className={style.mainBlock__photo}>
                    <img src={mainAvatar} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default MainBlock;