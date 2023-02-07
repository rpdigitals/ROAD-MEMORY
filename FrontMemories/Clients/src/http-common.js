import axios from "axios";
import http from "./services/dashboard-request.js";
// import http from "./services/hotel-request.js";
// import http from "./services/car-request.js";
// import http from "./services/resto-request.js";
// import http from "./services/tour-request.js";
//axios.defaults.headers.common["Authorization"] = auth.getToken();
//axios.defaults.headers.common["X-CSRF-TOKEN"] = "";
export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
  },
});
