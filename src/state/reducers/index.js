import userReducer from "./users";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  userReducer,
});

export default allReducers;
