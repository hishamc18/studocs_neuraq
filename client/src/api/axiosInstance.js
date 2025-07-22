import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://studoc.onrender.com/api",
  // baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export default axiosInstance;
