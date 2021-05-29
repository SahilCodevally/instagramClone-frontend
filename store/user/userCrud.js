import axios from "../../utils/axios";

import config from "../../config";

// Api
const USER_URL = `${config.BACKEND_API}/users`;

// User follow function
export const follow = async (followId) => {
  return await axios.get(`${USER_URL}/${followId}/follow`);
};

// User unfollow function
export const unfollow = async (unfollowId) => {
  return await axios.get(`${USER_URL}/${unfollowId}/unfollow`);
};

// Fetch user data function
export const fetchUserData = async (userName) => {
  return await axios.get(`${USER_URL}/${userName}/posts`);
};
