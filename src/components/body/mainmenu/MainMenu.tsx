import style from "./MainMenu.module.css";
import {Link} from "react-router-dom";
import car from "../../../icons/car.png";
import moto from "../../../icons/motociclet.png";

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
            <Link to='/createmewobject'>
                <div className={style.createmewobject}>
                    <div className={style.line1}></div>
                    <div className={style.line2}></div>
                </div>
            </Link>
        </div>
    )
}

export default MainMenu