import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {consumablesAPI} from "../api/api";

const SET_CONSUMABLES = "SET_CONSUMABLES"
const initialState = {
    consumablesList: []
}
const recordsReducer = (state = initialState, action: any) => {
    switch (action.type){
        case SET_CONSUMABLES:
            return {...state,consumablesList: action.value}
        default:
            return state
    }
}
type ActionsTypes = SetConsumablesType
type SetConsumablesType = {
    type: typeof SET_CONSUMABLES
    value: any
}
export const setConsumables = (value: any): SetConsumablesType =>{
    return {type: SET_CONSUMABLES, value}
}
type GetConsumablesThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>
export const addConsumables = (name: string, discription: string, id:number ):GetConsumablesThunkActionType => async (dispatch: any) => {
    console.log(name, discription)
    await consumablesAPI.addConsumables(name,discription, id)
}
export const getConsumables = (id:number ):GetConsumablesThunkActionType => async (dispatch: any) => {
    let response = await consumablesAPI.getConsumables(id)
    console.log(response)
    dispatch(setConsumables(response))
}

export default recordsReducer