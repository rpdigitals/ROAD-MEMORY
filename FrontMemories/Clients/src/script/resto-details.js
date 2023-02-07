import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Resto from "../services/resto/resto-request.js";
import RestoBooking from "../services/resto/resto-booking-request.js";

export default {
  data() {
    return {
      resto: [],
      category: [],
      caracteristics: [],
      reviews: [],
      hasBooked: false,
      time: "",
      date: "",
      table_price: "",
      number_of_tables: 1,
    };
  },
  methods: {
    restoDetails(id) {
      Resto.restoDetails(id).then((response) => {
        this.resto = response.data["data"][0];
        this.category = response.data["data"][0].category;
        this.caracteristics = response.data["data"][0].caracteristics;
        this.reviews = response.data["data"][0].reviews;
        this.table_price = response.data["data"][0].table_price;
      });
    },
    bookResto() {
      this.hasBooked = true;
      RestoBooking.bookResto({
        total_price: this.table_price * this.number_of_tables,
        number_of_tables: this.number_of_tables,
        customer_id: sessionStorage.getItem("customerId"),
        resto_id: this.resto.id,
      }).then((response) => {
        console.log(response.data);
      });
    },
  },

  mounted() {
    this.restoDetails(this.$route.params.restoId);
  },
};
