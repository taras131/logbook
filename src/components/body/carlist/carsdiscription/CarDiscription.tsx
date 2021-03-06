import React, {FC} from "react";
import {withRouter,Redirect} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store"
import style from "./carDiscription.module.css"
import Return from "../../../../common/return/Return";
import deleteicons from"../../../../icons/delete.png"
import {deleteCar} from "../../../../redux/carReducer";
import {NavLink} from "react-router-dom";
import Preloader from "../../../../common/preloader/Preloader";

type PathParamsType = {
    carId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & {
    someString: string
}
const CarDiscription: FC<PropsType> = (props) => {
    let id = +props.match.params.carId;
    const item = useSelector((state: AppStateType) => {
        return state.carInformation.carList.filter(item => item.id === id)[0]
    })
    const dispatch = useDispatch()
    const onDeleteClick = () =>{
        dispatch(deleteCar(item.id))
    }
    const isLoading = useSelector((state: AppStateType) => state.loandingInformation.isLoading)
    if(isLoading) {
        return <Preloader/>
    }
    return (
        <div className={style.wrapper}>
            <div className={style.item}>Марка: {item.brand}</div>
            <div className={style.item}>Модель: {item.model}</div>
            <div className={style.item}>Год выпуска: {item.yearManufacture}</div>
            <NavLink to = {"/carlist/cardiscription/consumables/"+id} className={`${style.menu} ${style.consumables}`}>
                Расходные материалы
            </NavLink >
            <NavLink to = {"/carlist/cardiscription/technicalmaintenance/"+id} className={`${style.menu} ${style.writes}`}>
                Записи  ТО
            </NavLink>
            <div className={`${style.menu} ${style.notes}`}>
                Не забыть!
            </div>
            <div onClick={onDeleteClick} className={`${style.menu} ${style.delete}`}>
                <img src={deleteicons} alt="delete"/>
            </div>
            <Return link = {"/carlist"}/>
        </div>
    )
}

export default withRouter(CarDiscription)