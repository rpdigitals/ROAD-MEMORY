import http from "../http-common";
class Profil {
  updatePartner(data, id) {
    return http.post(`/update-partner/${id}`, data);
  }
  getPartner(id) {
    return http.get(`/partner/${id}`);
  }
  addPartner(data) {
    return http.post("/create-partner", data);
  }
}
export default new Profil();
