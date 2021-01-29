import {carsAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

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
    isLoading: boolean
}
const initialState: InitialStateType = {
    isLoading: false,
    carList: []
}

const carReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_CARS:
            return {...state, carList: action.cars}
        case  SET_IS_LOADING:
            return {...state, isLoading: action.value}
        default:
            return state
    }
}
type ActionsTypes = SetCarsActionType | SetIsLoadingActionType
type SetCarsActionType = {
    type: typeof SET_CARS
    cars: Array<CarType>
}
export const setCars = (cars: Array<CarType>): SetCarsActionType => {
    return {type: SET_CARS, cars}
}
type SetIsLoadingActionType = {
    type: typeof SET_IS_LOADING
    value: boolean
}
export const setIsLoading = (value: boolean): SetIsLoadingActionType => {
    return {type: SET_IS_LOADING, value}
}

export type GetCarsThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>
export const getCars = (): GetCarsThunkActionType => async (dispatch: any) => {
    dispatch(setIsLoading(true))
    let response = await carsAPI.getCars()
    dispatch(setCars(response))
    dispatch(setIsLoading(false))
}
export const addCar = (brand: string, model: string, yearManufacture: string): GetCarsThunkActionType => async (dispatch: any) => {
    console.log(brand, model)
    dispatch(setIsLoading(true))
    await carsAPI.addCar(brand, model, yearManufacture)
    dispatch(setIsLoading(false))
}
export const deleteCar = (id: number): GetCarsThunkActionType => async (dispatch: any) => {
    dispatch(setIsLoading(true))
    await carsAPI.deleteCar(id)
    dispatch(setIsLoading(false))
}
export default carReducer