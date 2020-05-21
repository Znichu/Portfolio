import React from "react";
import styleContainer from '../common/style/Container.module.css'
import style from './ContactMe.module.css'
import Input from "./Input/Input";

const ContactMe = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <div className={style.contactMeSection}>
                    <h2 className={style.contactMe__title}>Contact me</h2>
                    <span>Contact me</span>
                </div>
                <div className={style.contactInput}>
                    <form action="#">
                        <Input label={"Enter your name"}/>
                        <Input label={"Enter your email"}/>
                        <Input label={"Enter your message"}/>
                    </form>
                </div>
                <button>Отправить</button>
            </div>
        </div>
    );
}

export default ContactMe;