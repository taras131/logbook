import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {consumablesAPI} from "../api/api";
import {setIsLoanding} from "./loadingReducer";

const SET_CONSUMABLES = "SET_CONSUMABLES",
    SET_TEHNICAL = "SET_TEHNICAL"
const initialState = {
    consumablesList: [],
    tehnicalList: []
}
const recordsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CONSUMABLES:
            return {...state, consumablesList: action.value}
        case SET_TEHNICAL:
            return {...state, tehnicalList: action.value}
        default:
            return state
    }
}
type ActionsTypes = SetConsumablesType | SetTehnicalType
type SetConsumablesType = { type: typeof SET_CONSUMABLES, value: any }
export const setConsumables = (value: any): SetConsumablesType => {
    return {type: SET_CONSUMABLES, value}
}
type SetTehnicalType = { type: typeof SET_TEHNICAL,value: any }
export const setTehnical = (value: any): SetTehnicalType => {
    return {type: SET_TEHNICAL, value}
}

type GetConsumablesThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>
export const addConsumables = (name: string, discription: string, id: string): GetConsumablesThunkActionType => async (dispatch: any) => {
    dispatch(setIsLoanding(true))
    await consumablesAPI.addConsumables(name, discription, id)
    dispatch(setIsLoanding(false))
}
export const getConsumables = (id: string): GetConsumablesThunkActionType => async (dispatch: any) => {
    dispatch(setIsLoanding(true))
    let response = await consumablesAPI.getConsumables(id)
    dispatch(setConsumables(response))
    dispatch(setIsLoanding(false))
}
export const addTehnical = (date: string, discription: string,odometer:string, id: string): GetConsumablesThunkActionType => async (dispatch: any) => {
    dispatch(setIsLoanding(true))
    await consumablesAPI.addTehnical(date, discription,odometer, id)
    dispatch(setIsLoanding(false))
}
export const getTehnical = (id: string): GetConsumablesThunkActionType => async (dispatch: any) => {
    dispatch(setIsLoanding(true))
    let response = await consumablesAPI.getTehnical(id)
    dispatch(setTehnical(response))
    dispatch(setIsLoanding(false))
}

export default recordsReducer