import http from "../../http-common";

class RestoBooking {
  bookResto(data) {
    return http.post("create-resto-booking", data);
  }
}
export default new RestoBooking();
