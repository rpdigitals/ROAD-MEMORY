import http from "../http-common";
class Hotel {
  addHotel(datas) {
    return http.post("/create-hotel", datas);
  }
  editHotel(datas, id) {
    return http.post(`/update-hotel/${id}`, datas);
  }
  addHotelCaracteristics(data) {
    return http.post("/create-hotel-caracteristic", data);
  }
  editHotelCaracteristics(data, id) {
    return http.post(`/update-hotel-caracteristic/${id}`, data);
  }
  hotelDetail(id) {
    return http.get(`/hotel-detail/${id}`);
  }
  deleteHotel(id) {
    console.log(id);
    return http.get(`/delete-hotel/${id}`);
  }
}
export default new Hotel();
