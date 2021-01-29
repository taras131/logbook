import style from "./CarList.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCars} from "../../../redux/carReducer";
import CarItem from "./carsdiscription/CarItem";
import Return from "../../../common/return/Return";
import {AppStateType} from "../../../redux/store"

const CarList = () => {
    const {carList, isLoading} = useSelector((state: AppStateType) => state.carInformation)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
    },[])
    const carItemList = carList.map((item) => <CarItem key={`${item.id}_${item.model}`} id = {item.id}
                                                       brand={item.brand} model={item.model} children
                                                       yearManufacture ={item.yearManufacture}/>)
    if(isLoading) {
        return <div>Загрузка</div>
    }
    return (
        <div className={style.containerwrapper}>
            {carItemList}
            <Return link = {"/"}/>
        </div>

    )
}

export default CarList