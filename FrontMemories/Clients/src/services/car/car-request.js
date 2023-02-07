import http from "../../http-common";

class Car {
  carList() {
    return http.get("/all-car");
  }
  carDetails(id) {
    console.log(id);
    return http.get(`/car-details/${id}`);
  }
  searchByKeyword(keyword) {
    return http.get(`/search-car/${keyword}`);
  }
  sortCarByPrice(sortOrder) {
    return http.get(`/sort-car-by-price/${sortOrder}`);
  }
}

export default new Car();
