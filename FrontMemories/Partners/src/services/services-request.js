import http from "../http-common";

class Service {
  service(partnerId) {
    return http.get(`/partner-all-service/${partnerId}`);
  }
  tourService(partnerId) {
    return http.get(`/all-tour-of-partner/${partnerId}`);
  }
  hotelService(partnerId) {
    return http.get(`/all-hotel-of-partner/${partnerId}`);
  }
  restoService(partnerId) {
    return http.get(`/all-resto-of-partner/${partnerId}`);
  }
  carService(partnerId) {
    return http.get(`/all-car-of-partner/${partnerId}`);
  }
}
export default new Service();
