import http from "../http-common";

class Dashboard {
  getWishList(customerId) {
    return http.get(`/customer-all-wish-list/${customerId}`);
  }
  getBookingList(customerId) {
    return http.get(`/customer-all-booking/${customerId}`);
  }
}

export default new Dashboard();
