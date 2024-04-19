import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://arba-developmentbackend.onrender.com",
});
