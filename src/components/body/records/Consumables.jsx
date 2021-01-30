import {withRouter} from "react-router-dom";
import Return from "../../../common/return/Return";
import style from "./Consumables.module.css"
import Add from "../../../common/add/Add";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getConsumables} from "../../../redux/recordsReducer";

const Consumables = (props) => {
    let id = props.match.params.carId
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getConsumables(id))
    },[])
    const consumablesList = useSelector(state => state.recordsInformation.consumablesList)
    const carData = useSelector(state => state.carInformation.carList.filter(item=> item.id === +id))[0]
    console.log(carData)
    const consumablesItems = consumablesList.map((item,index) =>{
        return(
            <div key={`${item.name}_${item.index}`} className={style.consumables_items}>
                <div className={style.name}>  {item.name} </div>
                <div className="discription"> : {item.discription}</div>
            </div>
        )
    })
    return (
        <div className={style.containerwrapper}>
            <h2>Расходные материалы для ТО</h2>
            <h3>{carData.brand}  {carData.model}</h3>
            <Return link={"/carlist/cardiscription/" } id = {id}/>
            {consumablesList.length !== 0
                ? consumablesItems
            : <div className={style.consumables_items}>
                    <div className={style.name}> Вы пока ничего не добавляли. Нажмите на +
                    чтобы исправить ситуацию</div>
                </div>}
            <Add link={"/createnewconsumables/"} id={id}/>
        </div>
    )
}

export default withRouter(Consumables)