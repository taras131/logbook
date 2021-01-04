const ADDCAR = "ADDCAR";
export type CarType ={
    id: number
    brend: string
    model: string
}
type InitialStateType = {
    carData: Array<CarType>
}
const initialState:InitialStateType = {
    carData: [
        {id: 1, brend: "Toyota", model: "Camry"},
        {id: 2, brend: "Volcwagen", model: "Caravella"}
    ]
}

const carReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADDCAR:
            return {...state,carData: [...state.carData,{id: state.carData.length+1,brend: action.brend,model: action.model}]}
        default:
            return state
    }
}

export const addCar = (brend: string, model: string) => {
    return {type: ADDCAR, brend,model}
}
export default carReducer