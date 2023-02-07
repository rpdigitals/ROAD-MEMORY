//import { bookingInfo } from "./tour-details.js";
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Tour from "../services/tour/tour-request.js";
import TourBooking from "../services/tour/tour-booking-request.js";

export default {
  data() {
    return {
      tour: sessionStorage.getItem("tour-name"),
      tour_id: sessionStorage.getItem("tour-id"),
      numberOfPerson: sessionStorage.getItem("numberOfPerson"),
      numberOfChildren: sessionStorage.getItem("numberOfChildren"),
      date: sessionStorage.getItem("date"),
      time: sessionStorage.getItem("time"),
      price: sessionStorage.getItem("price"),
      amount: sessionStorage.getItem("amount"),
      isBooked: "",
    };
  },
  methods: {
    tourDetails(id) {
      Tour.tourDetails(id)
        .then((response) => {
          // this.tours = response.data["data"];
          this.tour = response.data["data"][0];
          this.category = response.data["data"][0].category;
          this.caracteristic = response.data["data"][0].caracteristic;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createTourBooking() {
      var data = {
        tour_id: this.tour_id,
        customer_id: sessionStorage.getItem("customerId"),
        total_price: this.amount,
        date: this.date,
        hour: this.time,
        number_of_person: this.numberOfPerson,
      };
      this.isBooked = true;
      TourBooking.createTourBooking(data)
        .then((response) => {})
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
