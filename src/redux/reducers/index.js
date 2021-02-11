import { combineReducers } from "redux";
import user from "./user";
import resumeCollection from "./resumeCollection";
import resume from "./resume";
import theme from "./theme";

const rootReducer = combineReducers({
  user,
  resumeCollection,
  resume,
  theme
});

export default rootReducer;
