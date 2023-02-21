import http from "../http-common";
class Resto {
  getRestoCategories() {
    return http.get("/all-resto-category");
  }
  addResto(datas) {
    // console.log("cool");
    return http.post("/create-resto", datas);
  }
}
export default new Resto();
