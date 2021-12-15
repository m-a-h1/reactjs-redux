import userReducer from "./users/users.reducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: userReducer,
});

export default allReducers;
