import * as actionTypes from "../actions/actionTypes";

// Initial state
const initialState = {
  user: null,
  error: null,
  loading: false,
  suggesion: {
    users: [],
    page: 1,
    limit: 20,
  },
  search: {
    users: [],
    page: 1,
    limit: 10,
  },
};

// Reducer function
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.USER_FAILD:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.USER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case actionTypes.USER_FETCHED:
      return {
        ...state,
        user: {
          ...action.user,
          posts: action.posts,
        },
      };
    case actionTypes.USER_INIT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
