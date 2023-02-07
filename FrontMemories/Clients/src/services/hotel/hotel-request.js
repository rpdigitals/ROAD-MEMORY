import http from "../../http-common";

class Hotel {
  allHotel() {
    return http.get("/all-hotel");
  }
  sortHotelByPrice(sortOrder) {
    return http.get(`/sort-hotel-by-price/${sortOrder}`);
  }
  hotelDetails(id) {
    return http.get(`/hotel-detail/${id}`);
  }
  searchByKeyword(keyword) {
    return http.get("search-hotel?keyword=" + keyword);
  }
}

export default new Hotel();
