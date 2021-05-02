import axios from "axios";
const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api/"
      : "https://shubhamstream.herokuapp.com/api/",
  timeout: 5000,
});

export default instance;

export const allassets = "allassets";

export const playvideo = "playvideo?filename=";

export const mainurl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/"
    : "https://shubhamstream.herokuapp.com/api/";
