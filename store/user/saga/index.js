import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { fetchUserSaga, userFollowSaga, userUnfollowSaga } from "./saga";

// Watch auth function generator
export function* watchUser() {
  yield all([
    // takeEvery call every functions that matches
    takeEvery(actionTypes.USER_FETCH, fetchUserSaga),
    takeEvery(actionTypes.USER_FOLLOW, userFollowSaga),
    takeEvery(actionTypes.USER_UNFOLLOW, userUnfollowSaga),
  ]);
}
