import React from "react";
import style from './SkilsBlock.module.css';
import styleContainer from '../common/style/Container.module.css'
import Skill from "./Skill/Skill";
import {faCss3Alt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";

const SkillsBlock = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.skillsBlockSection}>
                    <h2 className={style.skillsBlock__title}>My Skills</h2>
                    <span>My Skills</span>
                </div>
                <div className={style.skills}>
                    <Skill title={"HTML"} icon={faHtml5} />
                    <Skill title={"CSS"} icon={faCss3Alt} />
                    <Skill title={"JS"} icon={faJs} />
                    <Skill title={"React"} icon={faReact} />
                </div>
            </div>
        </div>
    );
}

export default SkillsBlock;