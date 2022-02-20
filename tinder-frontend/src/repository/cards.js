import axios from "axios";

const cardInstance = axios.create({
  baseURL: "http://localhost:8082/tinder",
});

export default cardInstance;
