import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Tour from "../services/tour/tour-request.js";
import TourBooking from "../services/tour/tour-booking-request.js";
import TourWishList from "../services/tour/tour-wishlist-request.js";
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
export default {
  data() {
    return {
      tour: [],
      tourId: "",
      category: {},
      caracteristic: {},
      openDaysHours: {},
      date: "",
      time: "",
      numberOfPerson: 1,
      numberOfChildren: 1,
      price: 10,
      hasWished: "",
      isLogged: sessionStorage.getItem("isLogged"),
    };
  },
  methods: {
    tourDetails(id) {
      Tour.tourDetails(id)
        .then((response) => {
          this.tour = response.data["data"][0];
          this.openDaysHours = JSON.parse(this.tour.open_days_hours);
          console.log(this.openDaysHours);
          this.tourId = response.data["data"][0].id;
          this.price = response.data["data"][0].price;
          this.category = response.data["data"][0].category;
          this.caracteristic = response.data["data"][0].caracteristic;
          this.checkTourWishedByCustomer(
            this.tour.id,
            parseInt(sessionStorage.getItem("customerId"))
          );
        })
        .catch((e) => {
          console.log(e);
        });
      //convertir un string en int en javascript
    },
    bookingInfo() {
      sessionStorage.setItem("tour-name", this.tour.name);
      sessionStorage.setItem("tour-id", this.tour.id);
      sessionStorage.setItem("date", this.date);
      sessionStorage.setItem("time", this.time);
      sessionStorage.setItem("numberOfPerson", this.numberOfPerson);
      sessionStorage.setItem("numberOfChildren", this.numberOfChildren);
      sessionStorage.setItem("price", this.price);
      if (this.caracteristic.children) {
        sessionStorage.setItem("amount", this.price * this.numberOfPerson);
      } else {
        sessionStorage.setItem(
          "amount",
          this.price * (this.numberOfPerson + this.numberOfChildren)
        );
      }
    },
    checkTourWishedByCustomer(tourId, customerId) {
      TourWishList.checkTourWishedByCustomer(tourId, customerId)
        .then((response) => {
          this.hasWished = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createTourWishList(tourId) {
      TourWishList.createTourWishList(tourId)
        .then((response) => {
          this.hasWished = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.tourDetails(this.$route.params.id);
  },
};
