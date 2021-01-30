import style from "./Add.module.css";
import {FC} from "react";
import {NavLink} from "react-router-dom";

type PropsType ={
    link: string
    id: string|null
}
const Add: FC<PropsType> = (props) =>{
    return(
        <NavLink to = {props.link+props.id} className={style.createmewobject}>
            <div className={style.line1}></div>
            <div className={style.line2}></div>
        </NavLink>
    )
}

export default Add