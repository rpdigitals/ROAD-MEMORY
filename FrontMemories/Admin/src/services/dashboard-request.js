import http from "../http-common";

class Dashboard {
  allPartners() {
    return http.get("/all-partner");
  }
  allCustomers() {
    return http.get("/all-customer");
  }
  allTour() {
    return http.get("/all-tour");
  }
  allResto() {
    return http.get("/all-resto");
  }
  allHotels() {
    return http.get("/all-hotel");
  }
  allCar() {
    return http.get("/all-car");
  }
}

export default new Dashboard();
