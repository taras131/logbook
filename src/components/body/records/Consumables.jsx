import {useLocation, withRouter} from "react-router-dom";
import Return from "../../../common/return/Return";
import style from "./Consumables.module.css"
import Add from "../../../common/add/Add";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getConsumables} from "../../../redux/recordsReducer";
import Preloader from "../../../common/preloader/Preloader";
import ConsumablesItems from "./ConsumablesItems";

const Consumables = (props) => {
    const id = `` + useLocation().pathname.split("/").pop()
    const consumablesList = useSelector(state => state.recordsInformation.consumablesList)
    const carData = useSelector(state => state.carInformation.carList.filter(item => item.id === +id))[0]
    const isLoading = useSelector((state) => state.loandingInformation.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getConsumables(id))
    }, [id])
    const consumablesItems = consumablesList.map((item, index) => <ConsumablesItems key={`${item.name}_${index}`}
                                                                                    name={item.name}
                                                                                    discription={item.discription}/>)
    if (isLoading) {
        return <Preloader/>
    }
    return (
        <div className={style.containerwrapper}>
            <h2>Расходные материалы для ТО</h2>

            {consumablesList.length !== 0
                ? consumablesItems
                : <div className={style.consumables_items}>
                    <div className={style.name}> Вы пока ничего не добавляли. Нажмите на +
                        чтобы исправить ситуацию
                    </div>
                </div>}
            <Add link={"/createnewconsumables/"} id={id}/>
            <Return link={"/carlist/cardiscription/" + id}/>
        </div>
    )
}

export default Consumables