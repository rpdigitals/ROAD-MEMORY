import axios from "axios";
import http from "./services/dashboard-request.js";
export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
  },
});
