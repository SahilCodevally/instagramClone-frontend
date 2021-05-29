import * as actionTypes from "./actionTypes";

// Auth start
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

// Auth faild
export const authFaild = (error) => {
  return {
    type: actionTypes.AUTH_FAILD,
    error,
  };
};

// Auth success
export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS,
  };
};

// Login
export const login = (data) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    loginData: data,
  };
};

// Login success
export const loginSuccess = ({ token, ...data }) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    user: { ...data },
    authToken: token,
    isAuth: true,
  };
};

// Signup
export const signup = (data) => {
  return {
    type: actionTypes.AUTH_SIGNUP,
    signupData: data,
  };
};

// Logout
export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
