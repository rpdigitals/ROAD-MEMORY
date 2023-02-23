import http from "../http-common";
class Car {
  addCar(datas) {
    return http.post("/create-car", datas);
  }
  deleteCar(id) {
    return http.get(`/delete-car/${id}`);
  }
  carDetails(id) {
    return http.get(`/car-details/${id}`);
  }
  editCar(datas, id) {
    return http.post(`/update-car/${id}`, datas);
  }
}
export default new Car();
