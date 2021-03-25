import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  withCredentials: true,
});

export default axios;
