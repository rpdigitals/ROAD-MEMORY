import { PaperTable } from "@/components";
import Booking from "../services/booking-request";
import Service from "../services/services-request";

export default {
  data() {
    return {
      hotelBookings: {},
      tourBookings: {},
      restoBookings: {},
      hotelServices: {},
      tourServices: {},
      restoServices: {},
    };
  },
  methods: {
    booking() {
      Booking.booking(sessionStorage.getItem("partnerId")).then((response) => {
        //console.log(response.data);
        this.hotelBookings = response.data.hotelBookings;
        this.tourBookings = response.data.tourBookings;
        this.restoBookings = response.data.restoBookings;
      });
    },
    service() {
      Service.service(sessionStorage.getItem("partnerId")).then((response) => {
        this.hotelServices = response.data.hotels;
        this.tourServices = response.data.tours;
        this.restoServices = response.data.restos;
        console.log(this.tourServices);
        // console.log(tourServices);
      });
    },
  },
  mounted() {
    this.booking();
    this.service();
  },
};
