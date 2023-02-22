import http from "../http-common";
class Tour {
  getTourCategories() {
    return http.get("/all-tour-category");
  }
  addTour(datas) {
    return http.post("/create-tour", datas);
  }
  updateTour(datas, id) {
    return http.post(`/update-tour/${id}`, datas);
  }
  addTourCaracteristics(data) {
    return http.post("/create-tour-caracteristic", data);
  }
  updateTourCaracteristics(data, id) {
    return http.post(`/update-tour-caracteristic/${id}`, data);
  }
  deleteTour(id) {
    return http.get(`/delete-tour/${id}`);
  }
  tourDetail(id) {
    return http.get(`/tour-detail/${id}`);
  }
}
export default new Tour();
