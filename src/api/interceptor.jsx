import axios from "axios";
import store from "../store/store";
const BaseUrl = import.meta.env.VITE_PUBLIC_BACKEND_API_URL;

const Api = axios.create({
  timeout: 1000000,
  baseURL: BaseUrl,
});

Api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
Api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

Api.interceptors.request.use(
  (config) => {
    if (store?.getState()?.CurrentUserSlice?.token) {
      const token = `Bearer ${store?.getState()?.CurrentUserSlice?.token}`;
      config.headers = {
        Authorization: token,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
