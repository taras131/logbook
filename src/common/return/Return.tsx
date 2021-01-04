import style from "./Return.module.css"
import React from "react";
import returnarrow from "../../icons/return.png";
import {Link} from "react-router-dom";

const Return = () => {

    return(
        <div className={style.wrapper}>
            <Link to='/'>
                <div>
                    <img src={returnarrow} alt="returnarrow"/>
                </div>
            </Link>
        </div>
    )
}

export default Return