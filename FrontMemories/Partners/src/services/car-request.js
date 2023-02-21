import http from "../http-common";
class Car {
  addCar(datas) {
    // console.log("cool");
    return http.post("/create-car", datas);
  }
}
export default new Car();
