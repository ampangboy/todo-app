import { combineReducers } from "redux";
import currentUser from "./user/userReducers";
import tasks from "./todo/todoReducer";

const rootReducer = combineReducers({ currentUser, tasks });

export default rootReducer;
