import http from "../../http-common";

class TourBooking {
  createTourBooking(data) {
    return http.post("/create-tour-booking", data);
  }
}
export default new TourBooking();
