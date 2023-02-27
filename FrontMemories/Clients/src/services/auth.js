import http from "../http-common";

class Auth {
  async register(datas) {
    return await http.post("/register", datas);
  }
  async login(datas) {
    return await http.post("/login", datas);
  }
}

export default new Auth();
