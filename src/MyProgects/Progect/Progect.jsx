import React from "react";
import style from './Progect.module.css'
import project from '../../common/img/23324.jpg'


const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.project__avatar}>
                <img src={project} alt=""/>
                <div className={style.projectAvatar__button}>
                    <button>See</button>
                </div>
            </div>
            <div className={style.description}>
                <h4>Social Network</h4>
            </div>

            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus nobis minus, 
                eum aperiam dignissimos iusto, doloremque nihil corrupti nesciunt blanditiis reprehenderit in commodi dolore culpa autem, rem repellendus? Tempore, nulla?</span>
        </div>
    );
}



export default Project;