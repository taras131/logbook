import {connect} from "react-redux";
import {StateType} from "../../../redux/store";
import Return from "../../../common/return/Return";
import CarList from "./CarList";
import {FC} from "react";
import {CarType} from "../../../redux/carReducer";
import style from "./CarList.module.css"

type PropsType = {
    carData: Array<CarType>
}
const CarListContainer: FC<PropsType> = (props) => {
    const carArray = props.carData.map(item => <CarList key={item.id}
                                                        brend ={item.brend}
                                                        model = {item.model}/>)
    return(
        <div className={style.containerwrapper}>
            {carArray}
            <Return/>
        </div>
    )
}
const mapStateToProps = (state: StateType) =>{
    return{
        carData: state.carInformation.carData
    }
}
export default connect(mapStateToProps)(CarListContainer)