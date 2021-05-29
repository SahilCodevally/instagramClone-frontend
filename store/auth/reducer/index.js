import * as actionTypes from "../actions/actionTypes";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import config from "../../../config";
import { removeStorage, storeToken } from "../../../utils/general";

// Initial state
const initialState = {
  authToken: null,
  isAuth: null,
  loading: false,
  error: null,
  user: null,
  posts: null,
};

// Reducer function
export const authReducer = persistReducer(
  { storage, key: config.PERSIST_KEY },
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.AUTH_START:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case actionTypes.AUTH_FAILD:
        return {
          ...state,
          error: action.message,
          loading: false,
        };
      case actionTypes.AUTH_SUCCESS:
        return {
          ...state,
          error: null,
          loading: false,
        };
      case actionTypes.AUTH_LOGIN_SUCCESS: {
        // Store token
        storeToken(action.authToken);

        return {
          ...state,
          user: action.user,
          isAuth: action.isAuth,
          authToken: action.authToken,
        };
      }
      case actionTypes.AUTH_LOGOUT: {
        // Remove token from storage
        removeStorage(config.TOKEN_KEY);

        return {
          ...initialState,
        };
      }
      default:
        return state;
    }
  }
);
