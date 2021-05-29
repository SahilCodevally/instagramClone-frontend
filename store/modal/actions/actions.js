import * as actionTypes from "./actionTypes";

// Open action modal
export const openActionModal = (author, postId, isFollowing) => {
  return {
    type: actionTypes.MODAL_ACTION_OPEN,
    author,
    postId,
    isFollowing,
  };
};

// Close action modal
export const closeActionModal = () => {
  return {
    type: actionTypes.MODAL_ACTION_CLOSE,
  };
};

// Open setting modal
export const openSettingModal = () => {
  return {
    type: actionTypes.MODAL_SETTING_OPEN,
  };
};

// Close setting modal
export const closeSettingMadal = () => {
  return {
    type: actionTypes.MODAL_SETTING_CLOSE,
  };
};

// Open delete modal
export const openDeleteModal = (postId) => {
  return {
    type: actionTypes.MODAL_DELETE_OPEN,
    postId,
  };
};

// Close delete modal
export const closeDeleteModal = () => {
  return {
    type: actionTypes.MODAL_DELETE_CLOSE,
  };
};

// Open unfollow modal
export const openUnfollowModal = (author) => {
  return {
    type: actionTypes.MODAL_UNFOLLOW_OPEN,
    author,
  };
};

// Close unfollow modal
export const closeUnfollowModal = () => {
  return {
    type: actionTypes.MODAL_UNFOLLOW_CLOSE,
  };
};
