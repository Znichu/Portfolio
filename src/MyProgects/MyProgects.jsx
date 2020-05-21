import React from "react";
import styleContainer from '../common/style/Container.module.css'
import style from './MyProgects.module.css'
import Project from "./Progect/Progect";


const MyProjects = () => {
    return (
        <div className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                <div className={style.myProjectsSection}>
                    <h2 className={style.myProjects__title}>My Projects</h2>
                    <span>My projects</span>
                </div>
                <div className={style.myProjects}>
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    );
}



export default MyProjects;