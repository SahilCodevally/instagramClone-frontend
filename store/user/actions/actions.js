import * as actionTypes from "./actionTypes";

// User start
export const userStart = () => {
  return {
    type: actionTypes.USER_START,
  };
};

// User faild
export const userFaild = (error) => {
  return {
    type: actionTypes.USER_FAILD,
    error,
  };
};

// User success
export const userSuccess = () => {
  return {
    type: actionTypes.USER_SUCCESS,
  };
};

// Follow
export const follow = (followId) => {
  return {
    type: actionTypes.USER_FOLLOW,
    followId,
  };
};

// Unfollow
export const unfollow = (unfollowId) => {
  return {
    type: actionTypes.USER_UNFOLLOW,
    unfollowId,
  };
};

// Fetch user data
export const fetchUserData = (userName) => {
  return {
    type: actionTypes.USER_FETCH,
    userName,
  };
};

// User data fetched
export const userDataFetched = (data) => {
  return {
    type: actionTypes.USER_FETCHED,
    user: data.user,
    posts: data.posts,
  };
};

// Init state
export const userInit = () => {
  return {
    type: actionTypes.USER_INIT,
  };
};
