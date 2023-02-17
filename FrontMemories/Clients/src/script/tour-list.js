import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Tour from "../services/tour/tour-request.js";
import TourCategory from "../services/tour/tour-category-request.js";

export default {
  //name: "tour-list",
  data() {
    return {
      sortOrder: "",
      tours: [],
      categories: [],
      keyword: "",
      responseLength: 1,
    };
  },
  methods: {
    tourDetails(id) {
      this.$router.push(`/tour-details/${id}`);

      //console.log(this.sortOrder);
    },

    getDatas() {
      Tour.allTour()
        .then((response) => {
          console.log(JSON.parse(response.data["data"][0].open_days_hours));
          this.tours = response.data["data"];
          this.responseLength = this.tours.length;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    sortTourByPrice() {
      Tour.sortTourByPrice(this.sortOrder)
        .then((response) => {
          this.tours = response.data["data"];
          this.responseLength = this.tours.length;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getTourCategories() {
      TourCategory.getTourCategories()
        .then((response) => {
          //   console.log(response.data);
          this.categories = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    tourOfCategory(id) {
      TourCategory.tourOfCategory(id)
        .then((response) => {
          this.tours = response.data["data"];
          this.responseLength = this.tours.length;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    searchByKeyword() {
      Tour.searchByKeyword(this.keyword).then((response) => {
        this.tours = response.data["data"];
        this.responseLength = this.tours.length;
      });
    },
  },
  mounted() {
    this.getDatas();
    this.getTourCategories();
  },
};
