import * as actionTypes from "../actions/actionTypes";

// Initial state
const initialState = {
  deleteModal: {
    show: false,
    postId: null,
  },
  unfollowModal: {
    show: false,
    author: null,
  },
  actionModal: {
    show: false,
    postId: null,
    author: null,
    isFollowing: false,
  },
  settingModal: {
    show: false,
  },
};

// Reducer function
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODAL_ACTION_OPEN:
      return {
        ...state,
        actionModal: {
          show: true,
          postId: action.postId,
          author: action.author,
          isFollowing: action.isFollowing,
        },
      };
    case actionTypes.MODAL_ACTION_CLOSE:
      return {
        ...state,
        actionModal: {
          show: false,
          postId: null,
          author: null,
          isFollowing: false,
        },
      };
    case actionTypes.MODAL_SETTING_OPEN:
      return {
        ...state,
        settingModal: {
          show: true,
        },
      };
    case actionTypes.MODAL_SETTING_CLOSE:
      return {
        ...state,
        settingModal: {
          show: false,
        },
      };
    case actionTypes.MODAL_DELETE_OPEN:
      return {
        ...state,
        deleteModal: {
          show: true,
          postId: action.postId,
        },
      };
    case actionTypes.MODAL_DELETE_CLOSE:
      return {
        ...state,
        deleteModal: {
          show: false,
          postId: null,
        },
      };
    case actionTypes.MODAL_UNFOLLOW_OPEN:
      return {
        ...state,
        unfollowModal: {
          show: true,
          author: action.author,
        },
      };
    case actionTypes.MODAL_UNFOLLOW_CLOSE:
      return {
        ...state,
        unfollowModal: {
          show: false,
          author: null,
        },
      };
    default:
      return state;
  }
};
