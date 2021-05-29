import { put } from "redux-saga/effects";

import * as actions from "../actions";
import { notify } from "../../../utils/toster";
import * as postActions from "../../posts/actions";
import { follow, unfollow, fetchUserData } from "../userCrud";

// Follow function
export function* userFollowSaga(action) {
  try {
    // Call fetch start to displaying loading spinner
    yield put(actions.userStart());

    // Call login axios function
    const result = yield follow(action.followId);

    // If response error found throw error
    if (result.data && result.data.statusCode === 400) {
      throw new Error(result.data.message);
    }

    // Fetch post
    yield put(postActions.fetchPosts());

    // Toster notification
    notify("success", "User followd successfully.");

    // Call fetch success to set loading false
    yield put(actions.userSuccess());
  } catch (err) {
    console.log(err);

    // Toster notification
    notify("error", err?.response?.data?.message);

    // Call fetch faild to store error message in state
    yield put(actions.userFaild(err?.response?.data));
  }
}

// Unfollow function
export function* userUnfollowSaga(action) {
  try {
    // Call fetch start to displaying loading spinner
    yield put(actions.userStart());

    // Call login axios function
    const result = yield unfollow(action.unfollowId);

    // If response error found throw error
    if (result.data && result.data.statusCode === 400) {
      throw new Error(result.data.message);
    }

    // Fetch post
    yield put(postActions.fetchPosts());

    // Toster notification
    notify("success", "User unfollowed successfully.");

    // Call fetch success to set loading false
    yield put(actions.userSuccess());
  } catch (err) {
    console.log(err);

    // Toster notification
    notify("error", err?.response?.data.message);

    // Call fetch faild to store error message in state
    yield put(actions.userFaild(err?.response?.data));
  }
}

// Fetch user function
export function* fetchUserSaga(action) {
  try {
    // Call fetch start to displaying loading spinner
    yield put(actions.userStart());

    // Call login axios function
    const result = yield fetchUserData(action.userName);

    // If response error found throw error
    if (result.data && result.data.statusCode === 400) {
      throw new Error(result.data.message);
    }

    // Store user data into redux store
    yield put(actions.userDataFetched(result.data));

    // Call fetch success to set loading false
    yield put(actions.userSuccess());
  } catch (err) {
    console.log(err);

    // Toster notification
    notify("error", err?.response?.data?.message);

    // Call fetch faild to store error message in state
    yield put(actions.userFaild(err?.response?.data));
  }
}
