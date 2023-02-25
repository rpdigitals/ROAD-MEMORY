import http from "../http-common";
class News {
  createNews(data) {
    return http.post("/create-news", data);
  }
  allNews(id) {
    return http.get(`/all-news-of-partner/${id}`);
  }
  updateNews(data, id) {
    return http.post(`/update-news/${id}`, data);
  }
  deleteNews(id) {
    return http.get(`/delete-news/${id}`);
  }
}
export default new News();
