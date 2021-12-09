import { combineReducers } from "redux";
import authReducer from "../features/Auth/authSlice";
import blogReducer from "../features/Blog/blogSlice";

export const rootReducers = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});
