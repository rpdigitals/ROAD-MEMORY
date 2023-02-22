import http from "../http-common";
class Hotel {
  addHotel(datas) {
    // console.log("cool");
    return http.post("/create-hotel", datas);
  }
  addHotelCaracteristics(data) {
    return http.post("/create-hotel-caracteristic", data);
  }
  hotelDetail(id){
    return http.get(`/hotel-detail/${id}`);
  }
}
export default new Hotel();
