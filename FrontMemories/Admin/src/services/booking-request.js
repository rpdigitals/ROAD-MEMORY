import http from "../http-common";

class Booking {
  booking(partnerId) {
    return http.get(`/partner-all-booking/${partnerId}`);
  }

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

export default new Booking();
