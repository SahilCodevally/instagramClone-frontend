import { put } from "redux-saga/effects";

import * as actions from "../actions";
import { notify } from "../../../utils/toster";
import { getSinglePost, getPosts, deletePost } from "../postCrud";

// Get Posts function
export function* getPostsSaga(action) {
  try {
    // Call fetch start to displaying loading spinner
    yield put(actions.postStart());

    // Call login axios function
    const result = yield getPosts();

    // If response error found throw error
    if (result.data && result.data.statusCode === 400) {
      throw new Error(result.data.message);
    }

    // Store post data into store
    yield put(actions.postsFetched(result.data));

    // Call fetch success to set loading false
    yield put(actions.postSuccess());
  } catch (err) {
    console.log(err);

    // Toster notification
    notify("error", err.response.data.message);

    // Call fetch faild to store error message in state
    yield put(actions.postFaild(err.response.data));
  }
}

// Get Single Post function
export function* getSinglePostSaga(action) {
  try {
    // Call fetch start to displaying loading spinner
    yield put(actions.postStart());

    // Call login axios function
    const result = yield getSinglePost(action.id);

    // If response error found throw error
    if (result.data && result.data.statusCode === 400) {
      throw new Error(result.data.message);
    }

    // Store post data into store
    yield put(actions.siglePostFetched(result.data));

    // Call fetch success to set loading false
    yield put(actions.postSuccess());
  } catch (err) {
    console.log(err);

    // Toster notification
    notify("error", err.response.data.message);

    // Call fetch faild to store error message in state
    yield put(actions.postFaild(err.response.data));
  }
}

// Delete Post function
export function* deletePostSaga(action) {
  try {
    // Call fetch start to displaying loading spinner
    yield put(actions.postStart());

    console.log("action.id", action.id);

    // Call login axios function
    const result = yield deletePost(action.id);

    // If response error found throw error
    if (result?.data && result?.data?.statusCode === 400) {
      throw new Error(result?.data?.message);
    }

    // Store post data into store
    yield put(actions.fetchPosts());

    // Toster notification
    notify("success", "Post deleted successfully.");

    // Call fetch success to set loading false
    yield put(actions.postSuccess());
  } catch (err) {
    console.log(err);

    // Toster notification
    notify("error", err?.response?.data?.message);

    // Call fetch faild to store error message in state
    yield put(actions.postFaild(err.response.data));
  }
}
