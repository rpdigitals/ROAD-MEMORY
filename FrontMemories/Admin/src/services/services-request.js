import http from "../http-common";

class Service {
  allTour() {
    return http.get("/all-tour");
  }
  allResto() {
    return http.get("/all-resto");
  }
  allHotel() {
    return http.get("/all-hotel");
  }
  allCar() {
    return http.get("/all-car");
  }
}
export default new Service();
