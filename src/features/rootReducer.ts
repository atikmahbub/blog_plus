import { combineReducers } from "redux";
import authReducer from "../features/Auth/authSlice";

export const rootReducers = combineReducers({
  authReducer,
});
