import http from "../http-common";

class Auth {
  register(datas) {
    return http.post("/register", datas);
  }
  login(datas) {
    return http.post("/login", datas);
  }
}

export default new Auth();
