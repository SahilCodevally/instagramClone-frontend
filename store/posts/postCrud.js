import axios from "../../utils/axios";

import config from "../../config";

// Api
const POST_URL = `${config.BACKEND_API}/posts`;

// Get posts function
export const getPosts = async () => {
  return await axios.get(POST_URL);
};

// Get single post function
export const getSinglePost = async (postId) => {
  return await axios.get(`${POST_URL}/${postId}`);
};

// Delete post function
export const deletePost = async (postId) => {
  return await axios.delete(`${POST_URL}/${postId}`);
};
