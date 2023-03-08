import Help from "../components/Help.vue";
import Car from "../services/car/car-request.js";
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  components: { Help },
  data() {
    return {
      keyword: "",
      sortOrder: "",
      cars: {},
      responseLength: 1,
    };
  },
  methods: {
    carList() {
      Car.carList(this.keyword).then((response) => {
        this.cars = response.data["data"];
      });
    },
    goToCarDetails(carId) {
      console.log(carId);
      this.$router.push(`/car-details/${carId}`);
    },
    searchByKeyword() {
      Car.searchByKeyword(this.keyword).then((response) => {
        this.cars = response.data["data"];
        this.responseLength = this.cars.length;
      });
    },
    sortCarByPrice() {
      Car.sortCarByPrice(this.sortOrder).then((response) => {
        this.car = response.data["data"];
        console.log(response.data["data"]);
        this.responseLength = this.cars.length;
      });
    },
  },
  mounted() {
    this.carList();
  },
};
