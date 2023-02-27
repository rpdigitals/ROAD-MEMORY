import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Dashboard from "../services/dashboard-request.js";

export default {
  data() {
    return {
      //nav data
      heading: {
        Reservations: 0,
        Favoris: 2,
        Parametres: 3,
        // Profil: 4,
      },
      //Booking Data
      headTitle: "Reservations",
      headingMobile: 1,

      wishlist: "",
      bookings: "",
      profil: "",
      settings: "",
      tourBookings: "",
      hotelBookings: "",
      restoBookings: "",
      itemToDisplay: 1,
      //WishList data
      tourWishlist: [],
      //Settings data
    };
  },
  methods: {
    show(head) {
      console.log(head);
      var one = 1;
      var two = 2;
      var tree = 3;
      // var four = 4;

      switch (head) {
        case this.heading.Reservations:
          one = 0;
          this.headTitle = "Reservations";
          break;
        case this.heading.Favoris:
          two = 0;
          this.headTitle = "Favoris";
          break;
        case this.heading.Parametres:
          tree = 0;
          this.headTitle = "Parametres";
          break;
        // case this.heading.Profil:
        //   four = 0;
        //   this.headTitle = "Profil";
        //   break;
      }
      this.heading = {
        Reservations: one,
        Favoris: two,
        Parametres: tree,
        //  Profil: four,
      };
    },
    getWishList() {
      this.tourWishlist = [1, 2, 3, 4];
      Dashboard.getWishList(sessionStorage.getItem("customerId")).then(
        (reponse) => {
          this.tourWishlist = reponse.data.tour_wish_list;
          console.log(this.tourWishlist);
          //console.log(reponse.data.tour_wish_list);
        }
      );
    },
    getBookingList() {
      Dashboard.getBookingList(sessionStorage.getItem("customerId")).then(
        (reponse) => {
          this.tourBookings = reponse.data.tour_bookings;
          this.hotelBookings = reponse.data.hotel_bookings;
          this.restoBookings = reponse.data.resto_bookings;
          console.log(reponse.data.resto_bookings);
        }
      );
    },
    goToTourDetails(tourId) {
      this.$router.push(`/tour-details/${tourId}`);
    },
  },
  mounted() {
    this.getWishList();
    this.getBookingList();
  },
};
