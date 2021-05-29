import axios from "axios";
import configData from "../config";
import { getToken } from "./general";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    if (!config.headers.Authorization) {
      const authToken = getToken(configData.TOKEN_KEY);
      config.headers.Authorization = `Bearer ${authToken}`;
      return config;
    }

    delete config.headers.Authorization;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;
