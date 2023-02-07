import http from "../../http-common";

class TourCategory {
  getTourCategories() {
    return http.get("/all-tour-category");
  }
  tourOfCategory(id) {
    return http.get(`/tour-of-category/${id}`);
  }
  
}
export default new TourCategory();
