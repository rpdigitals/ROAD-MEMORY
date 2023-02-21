import http from "../http-common";
class Hotel {
  addHotel(datas) {
    // console.log("cool");
    return http.post("/create-hotel", datas);
  }
}
export default new Hotel();
