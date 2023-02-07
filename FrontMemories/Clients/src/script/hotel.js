import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Hotel from "../services/hotel/hotel-request.js";
import Help from "../components/Help.vue";

export default {
  components: { Help },

  data() {
    return {
      hotels: {},
      caracteristic: {},
      sortOrder: "",
      keyword: "",
      responseLength: 1,
    };
  },
  methods: {
    allHotel() {
      Hotel.allHotel()
        .then((response) => {
          //  console.log(response.data["data"][0]);
          this.hotels = response.data["data"];
          this.caracteristics = response.data["data"].caracteristics;
          this.responseLength = this.hotels.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sortHotelByPrice() {
      Hotel.sortHotelByPrice(this.sortOrder)
        .then((response) => {
          this.hotels = response.data["data"];
          this.responseLength = this.hotels.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    hotelDetails(id) {
      this.$router.push(`/hotel-details/${id}`);
    },
    searchByKeyword() {
      Hotel.searchByKeyword(this.keyword).then((response) => {
        this.hotels = response.data["data"];
        this.responseLength = this.hotels.length;
      });
    },
  },
  mounted() {
    this.allHotel();
  },
};
//c'est quoi le langage dart
