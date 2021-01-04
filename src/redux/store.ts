import {createStore , combineReducers} from 'redux';
import carReducer from "./carReducer";

const reducersList = combineReducers({
    carInformation: carReducer
})
const store = createStore(reducersList)
export type StateType = ReturnType<typeof reducersList>
export default store