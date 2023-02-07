import http from "../../http-common";

class Tour {
  allTour() {
    return http.get("/all-tour");
  }
  sortTourByPrice(sortOrder) {
    return http.get(`/sort-tour-by-price/${sortOrder}`);
  }
  tourDetails(id) {
    return http.get(`/tour-detail/${id}`);
  }
  searchByKeyword(keyword) {
    console.log(keyword);
    return http.get("/search-tour?keyword=" + keyword);
  }
}

export default new Tour();
