import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Hotel from "../services/hotel/hotel-request.js";
//import HotelBooking from "../services/hotel/hotel-booking-request.js";
//import HotelWishList from "../services/hotel/hotel-wishlist-request.js";
export default {
  data() {
    return {
      hotel: {},
      hotelId: "",
      category: {},
      caracteristics: {},
      room_categories: {},
      date: "",
      time: "",
      numberOfPerson: "0",
      numberOfChildren: "0",
      price: "",
      hasWished: "",
      note: "",
      reviews: {},
    };
  },
  methods: {
    hotelDetails(id) {
      Hotel.hotelDetails(id)
        .then((response) => {
          console.log(response.data["data"][0]);

          this.hotel = response.data["data"][0];
          this.hotelId = response.data["data"][0].id;
          this.price = response.data["data"][0].price;
          this.caracteristics = response.data["data"][0].caracteristics;
          this.room_categories = response.data["data"][0].room_categories;
          this.note = response.data["data"][0].note;
          this.reviews = response.data["data"][0].reviews;
          this.checkHotelWishedByCustomer(
            this.hotel.id,
            parseInt(sessionStorage.getItem("customerId"))
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //format a date in javascript to display
    bookingInfo() {
      sessionStorage.setItem("hotel-name", this.hotel.name);
      sessionStorage.setItem("hotel-id", this.hotel.id);
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
    checkHotelWishedByCustomer(hotelId, customerId) {
      HotelWishList.checkhotelWishedByCustomer(hotelId, customerId)
        .then((response) => {
          this.hasWished = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createHotelWishList(hotelId) {
      HotelWishList.createHotelWishList(hotelId)
        .then((response) => {
          this.hasWished = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    roomCategory(id) {
      this.$router.push(`/room-category/${id}`);
    },
  },
  mounted() {
    this.hotelDetails(this.$route.params.id);
    sessionStorage.setItem("hotelId", this.$route.params.id);
  },
};
