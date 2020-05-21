import React from "react"
import style from "./Input.module.css"


const Input = (props) => {
    return (
        <div className={style.mainFormField}>
            <label>{props.label}</label>
            <input type="text"/>
        </div>

    );
}

export default Input;