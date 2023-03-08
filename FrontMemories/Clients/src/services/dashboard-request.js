import http from "../http-common";

class Dashboard {
  getWishList(customerId) {
    return http.get(`/customer-all-wish-list/${customerId}`);
  }
  getBookingList(customerId) {
    return http.get(`/customer-all-booking/${customerId}`);
  }
  profil(customerId) {
    return http.get(`/customer/${customerId}`);
  }
  updateCustomer(id, data) {
    return http.post(`/update-customer/${id}`, data);
  }
  deleteRestoBooking(id) {
    return http.get(`/delete-resto-booking/${id}`);
  }
  deleteTourBooking(id) {
    return http.get(`/delete-tour-booking/${id}`);
  }
  deleteHotelBooking(id) {
    return http.get(`/delete-hotel-booking/${id}`);
  }
}

export default new Dashboard();
