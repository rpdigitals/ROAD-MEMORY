import http from "../../http-common";
class TourWishList {
  createTourWishList(tourId) {
    return http.post("/create-tour-wish-list", {
      customer_id: sessionStorage.getItem("customerId"),
      tour_id: tourId,
    });
  }
  deleteTourWishList(tourId) {
    return http.get(`/delete-tour-wish-list/${id}`);
  }
  checkTourWishedByCustomer(tourId, customerId) {
    return http.get(`/customer/${customerId}/has-wished-tour/${tourId}`);
  }
}
export default new TourWishList();
