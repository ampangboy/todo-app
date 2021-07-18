import { combineReducers } from "redux";
import currentUser from "./user/userReducers";

const rootReducer = combineReducers({ currentUser });

export default rootReducer;
