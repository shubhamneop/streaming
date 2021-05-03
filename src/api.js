import axios from "axios";
export const mainurl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/"
    : process.env.REACT_APP_API_URL;
//"https://shubhamstream.herokuapp.com/api/";

const instance = axios.create({
  baseURL: mainurl,
  timeout: 5000,
});

export default instance;

export const allassets = "allassets";

export const playvideo = "playvideo?filename=";
