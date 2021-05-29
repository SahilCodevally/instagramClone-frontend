import * as actionTypes from "../actions/actionTypes";

// Initial state
const initialState = {
  posts: [],
  post: null,
  error: null,
  loading: false,
};

// Reducer function
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.POST_FAILD:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.POST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case actionTypes.POSTS_FETCHED:
      return {
        ...state,
        posts: action.posts,
      };
    case actionTypes.POST_FETCHED:
      return {
        ...state,
        post: action.post,
      };
    case actionTypes.POSTS_INIT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
