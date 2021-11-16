import axios from "axios";

// create base URL to make the requests to the database
const instance = axios.create({
  baseURL: "https://gist.githubusercontent.com/yuhong90",
});

export default instance;
