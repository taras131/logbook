import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import carReducer from "./carReducer";
import recordsReducer from "./recordsReducer";

let reducersList = combineReducers({
    carInformation: carReducer,
    recordsInformation: recordsReducer
});
type ReducersListType = typeof reducersList
export type AppStateType = ReturnType<ReducersListType>
let store = createStore(reducersList, applyMiddleware(thunkMiddleware));

export default store;

