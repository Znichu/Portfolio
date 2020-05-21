import React from 'react';
import style from "./Skill.module.css"
import { faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.skillIcon}><FontAwesomeIcon icon={props.icon} size="5x"/></div>
            <h5 className={style.skillTitle}>{props.title}</h5>
            <span className={style.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem illum iste enim itaque ipsum dolores rem, provident, 
                debitis perspiciatis non nisi quos dolore? Praesentium dolorem saepe aliquam nam nobis!
            </span>

        </div>
    );
}


export default Skill;