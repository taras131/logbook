import style from "./Consumables.module.css";
import React, {FC} from "react";

type PropsType = {
    name: string
    discription: string
}

const ConsumablesItems: FC<PropsType> = (props) => {
    return(
        <div className={style.consumables_items}>
            <div className={style.name}>  {props.name} </div>
            <div className="discription"> : {props.discription}</div>
        </div>
    )
}

export default ConsumablesItems