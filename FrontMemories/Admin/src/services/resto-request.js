import http from "../http-common";
class Resto {
  getRestoCategories() {
    return http.get("/all-resto-category");
  }
  addResto(datas) {
    return http.post("/create-resto", datas);
  }
  deleteResto(id) {
    return http.get(`/delete-resto/${id}`);
  }
  addRestoCaracteristics(datas) {
    return http.post("/create-resto-caracteristic", datas);
  }
  getRestoCategories() {
    return http.get("/all-resto-category");
  }
  restoDetail(id) {
    return http.get(`/resto-detail/${id}`);
  }
  updateRestoCaracteristics(data, id) {
    return http.post(`/update-resto-caracteristic/${id}`, data);
  }
  updateResto(data, id) {
    return http.post(`/update-resto/${id}`, data);
  }
}
export default new Resto();
