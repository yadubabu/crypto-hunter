import { combineReducers } from "redux";
import coinReduser from "./coinReducer";
import coinDepenReducer from "./coinDepenReducer";


const reducers=combineReducers({
     coins:coinReduser,
    val:coinDepenReducer
})
export default reducers;