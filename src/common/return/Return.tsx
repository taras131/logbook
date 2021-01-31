import style from "./Return.module.css"
import React, {FC} from "react";
import returnarrow from "../../icons/return.png";
import {NavLink} from "react-router-dom";

type PropsType = {
    link: string
}
const Return: FC<PropsType> = (props) => {
    return(
        <div className={style.wrapper}>
            <NavLink to={props.link}>
                <div>
                    <img src={returnarrow} alt="returnarrow"/>
                </div>
            </NavLink>
        </div>
    )
}

export default Return

//http://localhost:3000/carlist/cardiscription/technicalmaintenance/1611932625175
//http://localhost:3000/carlist/cardiscription/technicalmaintenance/1611932625175
//                     /carlist/cardiscription/technicalmaintenance/" + id