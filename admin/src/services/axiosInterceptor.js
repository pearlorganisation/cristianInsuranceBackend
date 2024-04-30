import axios from "axios";

// This code is used to access redux store in this file.
let store;
export const injectStore = (_store) => {
  store = _store;
};

// Creating new axios instance
export const instance = axios.create({
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
  baseURL:
    import.meta.env.REACT_APP_WORKING_ENVIRONMENT === "development"
      ? `${import.meta.env.REACT_APP_DEV_API_URL}`
      : `${import.meta.env.REACT_APP_DEV_API_URL}`,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

// ------------------------------------------- THE END -------------------------------------------
