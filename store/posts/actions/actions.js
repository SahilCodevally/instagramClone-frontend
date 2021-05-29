import * as actionTypes from "./actionTypes";

// Post start
export const postStart = () => {
  return {
    type: actionTypes.POST_START,
  };
};

// Post faild
export const postFaild = (error) => {
  return {
    type: actionTypes.POST_FAILD,
    error,
  };
};

// Post success
export const postSuccess = () => {
  return {
    type: actionTypes.POST_SUCCESS,
  };
};

// Fetch posts
export const fetchPosts = () => {
  return {
    type: actionTypes.POSTS_FETCH,
  };
};

// Posts fetched
export const postsFetched = (posts) => {
  return {
    type: actionTypes.POSTS_FETCHED,
    posts,
  };
};

// Fetch single post
export const fetchSinglePost = (id) => {
  return {
    type: actionTypes.POST_FETCH,
    id,
  };
};

// Single post fetched
export const siglePostFetched = (post) => {
  return {
    type: actionTypes.POST_FETCHED,
    post,
  };
};

// Init state
export const postDelete = (id) => {
  return {
    type: actionTypes.POST_DELETE,
    id,
  };
};

// Init state
export const postsInit = () => {
  return {
    type: actionTypes.POSTS_INIT,
  };
};
