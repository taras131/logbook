import Return from "../../../common/return/Return";
import style from "./Consumables.module.css"
import Add from "../../../common/add/Add";
import {useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store"
import React, {useEffect} from "react";
import {getTehnical} from "../../../redux/recordsReducer";
import Preloader from "../../../common/preloader/Preloader";

const TechnicalMaintenance = () => {
    const id: string ="" + useLocation().pathname.split("/").pop()
    const {tehnicalList, carData} = useSelector((state: AppStateType) => {
        return({
            tehnicalList:state.recordsInformation.tehnicalList,
            carData:state.carInformation.carList.filter(item => +item.id === +id)[0]
        })
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTehnical(id))
    },[])

    const tehnicalItem = tehnicalList.map((item: any) => {
        return (
            <div key={item.date} className={style.tehnical_items}>
                <div className={style.atribute}>
                    <div>Дата: {item.date} </div>
                    <div>Пробег: {item.odometer}</div>
                </div>
                <h3> Проведённые работы:</h3>
                <div> {item.discription}</div>
            </div>
        )
    })
    const isLoading = useSelector((state: AppStateType) => state.loandingInformation.isLoading)
    if(isLoading) {
        return <Preloader/>
    }
    return (
        <div className={style.containerwrapper}>

            <h3>Проведённые работы по техобслуживанию:</h3>
            {tehnicalItem}
            <Add link={"/addtechnicalmaintenance/"} id={"" + id}/>
            <Return link={"/carlist/cardiscription/" + id}/>
        </div>
    )
}
export default TechnicalMaintenance