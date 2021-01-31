
const SET_IS_LOANDING = "SET_IS_LOANDING"
type InitialStateType = { isLoading: boolean }
const initialState: InitialStateType = {
    isLoading: false
}
const loadingReducer=(state = initialState,action: ActionsTypes)=>{
    switch (action.type){
        case SET_IS_LOANDING:
            return {...state,isLoading: action.payload}
        default:
            return state
    }
}
type ActionsTypes = SetIsLoandingType
type SetIsLoandingType = {type: typeof SET_IS_LOANDING,payload: boolean }
export const setIsLoanding = (payload: boolean): SetIsLoandingType => {
    return {type: SET_IS_LOANDING, payload}
}

export default loadingReducer