import http from "../../http-common";

class Room {
  singleRoom(roomId) {
    return http.get(`/single-room/${roomId}`);
  }
  bookHotel(data) {
    return http.post("/create-hotel-booking", data);
  }
}

export default new Room();
