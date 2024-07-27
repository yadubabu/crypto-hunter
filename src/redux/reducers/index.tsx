import { combineReducers } from "redux";
import coinReduser from "./coinReducer";
import coinDepenReducer from "./coinDepenReducer";
import stockReduser from "./stockReducer";


const reducers=combineReducers({
     coins:coinReduser,
    val:coinDepenReducer,
    stocks:stockReduser,
})
export default reducers;