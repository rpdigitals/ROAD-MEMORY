import http from "../http-common";
class Tour {
    getTourCategories() {
        return http.get("/all-tour-category");
    }
    addTour(datas) {
        // console.log("cool");
        return http.post("/create-tour", datas);
    }
}
export default new Tour();