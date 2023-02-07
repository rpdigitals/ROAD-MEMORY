import http from "../../http-common";

class RoomsCategory {
  roomsOfCategory(id) {
    return http.get(`all-room/${id}`);
  }
}
export default new RoomsCategory();
