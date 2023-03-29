import { combineReducers } from "redux";
import todoReducers from ".";

const rootReducers = combineReducers({todoReducers});
export default rootReducers;