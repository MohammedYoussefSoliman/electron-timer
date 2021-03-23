import { combineReducers } from "redux";

import userReducer from "./reducers/userReducer";
import workReducer from "./reducers/projectsReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  work: workReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
