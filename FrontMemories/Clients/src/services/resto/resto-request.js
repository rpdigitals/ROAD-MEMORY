import http from "../../http-common";

class Resto {
  restoCategory() {
    return http.get("/all-resto-category");
  }
  restoList() {
    return http.get("/all-resto");
  }
  searchByKeyword(keyword) {
    return http.get("/search-resto/?keyword=" + keyword);
  }
  restoOfCategory(id) {
    return http.get("/resto-category/" + id);
  }
  restoDetails(id) {
    return http.get("/resto-detail/" + id);
  }
  sortRestoByPrice(sortOrder) {
    return http.get(`/sort-resto-by-table-price/${sortOrder}`);
  };
}
export default new Resto();
