import Return from "../../../common/return/Return";
import React from "react";
import style from "./MotoList.module.css"

const MotoList = () => {
    return(
        <div className={style.wrapper}>
            MOTOLIST
            <Return link={"/"}/>
        </div>
    )
}

export default MotoList