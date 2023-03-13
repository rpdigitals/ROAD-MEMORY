import http from "../http-common";
class Room {
  addRoomCategory(data) {
    return http.post("/create-room-category", data);
  }
  addRoom(data) {
    return http.post("/create-room", data);
  }
  getRoomCategories(id) {
    return http.get(`/all-room-category/${id}`);
  }
  deleteRoomCategory(id) {
    return http.get(`/delete-room-category/${id}`);
  }
  updateRoomCategory(id, data) {
    return http.post(`/update-room-category/${id}`, data);
  }
}
export default new Room();
