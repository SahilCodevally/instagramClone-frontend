import axios from "../../utils/axios";

import config from "../../config";

// Api
const LOGIN_URL = `${config.BACKEND_API}/auth/login`;
const SIGNUP_URL = `${config.BACKEND_API}/auth/signup`;

// Login function
export const login = async (loginData) => {
  return await axios.post(LOGIN_URL, loginData, {
    headers: { Authorization: "Bearer " },
  });
};

// Signup function
export const signup = async (signupData) => {
  return await axios.post(SIGNUP_URL, signupData, {
    headers: { Authorization: "Bearer " },
  });
};
