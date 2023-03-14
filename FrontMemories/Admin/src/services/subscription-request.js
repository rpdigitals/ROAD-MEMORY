import http from "../http-common";
class Subscriptions {
  substype() {
    return http.get("all-substype");
  }
  subscription(id) {
    return http.get(`subscription-of-partner/${id}`);
  }
  changePlan(subscription, data) {
    return http.post(`update-subscription/${subscription}`, data);
  }
}
export default new Subscriptions();
