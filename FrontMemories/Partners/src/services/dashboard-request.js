import http from "../http-common";

class Dashboard {
  register(datas) {
    http.post("register", datas);
  }
  login(datas) {
    http.post("register", datas);
  }
  booking(partnerId) {
    return http.get(`/partner-all-booking/${partnerId}`);
  }
  service(partnerId) {
    return http.get(`/partner-number-of-active-service/${partnerId}`);
  }
  // service(partnerId) {
  //   return http.get(`/partner-all-service/${partnerId}`);
  // }

  tourBooking(partnerId) {
    return http.get(`/all-tour-booking-partner/${partnerId}`);
  }
  hotelBooking(partnerId) {
    return http.get(`/all-hotel-booking-partner/${partnerId}`);
  }
  restoBooking(partnerId) {
    return http.get(`/all-resto-booking-partner/${partnerId}`);
  }
}

export default new Dashboard();
