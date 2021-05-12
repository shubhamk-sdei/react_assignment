import updateUserData from "./login";
import heroesData from "./heroes";

import { combineReducers } from "redux";

const reducers = combineReducers({
  updateUserData,
  heroesData,
});

export default reducers;
