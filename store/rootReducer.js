import { combineReducers } from "redux";

import { userReducer } from "./user/reducer";
import { authReducer } from "./auth/reducer";
import { postReducer } from "./posts/reducer";
import { modalReducer } from "./modal/reducer";

// Root reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  modal: modalReducer,
});
