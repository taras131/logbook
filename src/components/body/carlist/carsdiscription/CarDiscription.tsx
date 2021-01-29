import {FC} from "react";
import {withRouter,Redirect} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store"
import style from "./carDiscription.module.css"
import Return from "../../../../common/return/Return";
import deleteicons from"../../../../icons/delete.png"
import {deleteCar} from "../../../../redux/carReducer";

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
    if(!item){return (<Redirect to ={"/carlist"}/>)}
    return (
        <div className={style.wrapper}>
            <Return link = {"/carlist"}/>
            <div className={style.item}>Марка: {item.brand}</div>
            <div className={style.item}>Модель: {item.model}</div>
            <div className={style.item}>Год выпуска: {item.yearManufacture}</div>
            <div className={`${style.menu} ${style.TO}`}>
                Расходные материалы
            </div>
            <div className={`${style.menu} ${style.writes}`}>
                Записи  ТО
            </div>
            <div className={`${style.menu} ${style.notes}`}>
                Не забыть!
            </div>
            <div onClick={onDeleteClick} className={`${style.menu} ${style.delete}`}>
                <img src={deleteicons} alt="delete"/>
            </div>
        </div>
    )
}

export default withRouter(CarDiscription)