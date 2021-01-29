import {FC} from "react";
import style from "../CarList.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    brand: string
    model: string
    yearManufacture: number
}
const CarItem: FC<PropsType> = (props) => {
    return (
        <div>
            <NavLink to={`/carlist/cardiscription/`+props.id} className={style.wrapper}>
                <div>{props.brand}</div>
                <div>{props.model}</div>
                <div>{props.yearManufacture}</div>
            </NavLink>
        </div>
    )
}

export default CarItem