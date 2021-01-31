import {carsAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {setIsLoanding} from "./loadingReducer";

const SET_IS_LOADING = "SET_IS_LOADING",
    SET_CARS = "SET_CARS"
export type CarType = {
    id: number
    brand: string
    model: string
    yearManufacture: string
}
type InitialStateType = {
    carList: Array<CarType>
}
const initialState: InitialStateType = {
    carList: []
}

const carReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_CARS:
            return {...state, carList: action.cars}
        default:
            return state
    }
}
type ActionsTypes = SetCarsActionType
type SetCarsActionType = {
    type: typeof SET_CARS
    cars: Array<CarType>
}
export const setCars = (cars: Array<CarType>): SetCarsActionType => {
    return {type: SET_CARS, cars}
}
type GetCarsThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>
export const getCars = (): GetCarsThunkActionType => async (dispatch: any) => {
    dispatch(setIsLoanding(true))
    let response = await carsAPI.getCars()
    dispatch(setCars(response))
    dispatch(setIsLoanding(false))
}
export const addCar = (brand: string, model: string, yearManufacture: string): GetCarsThunkActionType => async (dispatch: any) => {
    dispatch(setIsLoanding(true))
    await carsAPI.addCar(brand, model, yearManufacture)
    dispatch(setIsLoanding(false))
}
export const deleteCar = (id: number): GetCarsThunkActionType => async (dispatch: any) => {
    dispatch(setIsLoanding(true))
    await carsAPI.deleteCar(id)
    dispatch(setIsLoanding(false))
}
export default carReducer