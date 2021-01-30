import style from "./MainMenu.module.css";
import {Link} from "react-router-dom";
import car from "../../../icons/car.png";
import moto from "../../../icons/motociclet.png";
import Add from "../../../common/add/Add";

const MainMenu = () => {
    return (
        <div className={style.wrapper}>
            <Link to='/carlist'>
                <div className={style.carlist}>
                    <img src={car} alt="car"/>
                </div>
            </Link>
            <Link to='/motolist'>
                <div className={style.motolist}>
                    <img src={moto} alt="moto"/>
                </div>
            </Link>
            <Add link = {'/createmewobject'} id={""}/>
        </div>
    )
}

export default MainMenu