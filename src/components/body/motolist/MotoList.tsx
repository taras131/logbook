import Return from "../../../common/return/Return";
import React from "react";
import style from "./MotoList.module.css"
import Preloader from "../../../common/preloader/Preloader";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";

const MotoList = () => {

    const isLoading = useSelector((state:AppStateType) => state.loandingInformation.isLoading)
    if(isLoading) {
        return <Preloader/>
    }
    return(
        <div className={style.wrapper}>
            MOTOLIST
            <Return link={"/"}/>
        </div>
    )
}

export default MotoList