import { combineReducers } from "redux";
import coinReduser from "./coinReducer";

const reducers=combineReducers({
    coins:coinReduser,
})
export default reducers;