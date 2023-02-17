import http from "../../http-common";

class Tour {
  async allTour() {
    return await http.get("/all-tour");
  }
  sortTourByPrice(sortOrder) {
    return http.get(`/sort-tour-by-price/${sortOrder}`);
  }
  async tourDetails(id) {
    return await http.get(`/tour-detail/${id}`);
  }
  searchByKeyword(keyword) {
    console.log(keyword);
    return http.get("/search-tour?keyword=" + keyword);
  }
}

export default new Tour();
