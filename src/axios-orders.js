import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-32633.firebaseio.com/"
});

export default instance;
