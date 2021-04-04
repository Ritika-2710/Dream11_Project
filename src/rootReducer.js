import {combineReducers} from "redux";
import fetchReducer from './Reducer/fetchReducer'
const rootReducer = combineReducers(
    {
        user:fetchReducer
    }
)
export default rootReducer