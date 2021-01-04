import style from "./CarList.module.css"
import {FC} from "react";

type PropsType = {
    brend: string
    model: string
}

const CarList: FC<PropsType> = (props) => {
    return(
        <div className={style.wrapper}>
            <div>{props.brend}</div>
            <div>{props.model}</div>
        </div>
    )
}

export default CarList