import axios from "axios";

const baseURL = "https://rating-admin.herokuapp.com/api/admin";

let headers = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${JSON.parse(localStorage.token)}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers
});

export default axiosInstance;
