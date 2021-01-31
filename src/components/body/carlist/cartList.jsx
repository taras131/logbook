import style from "./CarList.module.css"
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getCars} from "../../../redux/carReducer";
import CarItem from "./carsdiscription/CarItem";
import Return from "../../../common/return/Return";
import Preloader from "../../../common/preloader/Preloader";
import {AppStateType} from "../../../redux/store";

const CarList = () => {
    const {carList} = useSelector((state) => state.carInformation)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
    },[])
    const carItemList = carList.map((item) => <CarItem key={`${item.id}_${item.model}`} id = {item.id}
                                                       brand={item.brand} model={item.model} children
                                                       yearManufacture ={item.yearManufacture}/>)
    const isLoading = useSelector((state) => state.loandingInformation.isLoading)
    if(isLoading) {
        return <Preloader/>
    }
    return (
        <div className={style.containerwrapper}>
            {carItemList}
            <Return link = {"/"}/>
        </div>

    )
}

export default CarList