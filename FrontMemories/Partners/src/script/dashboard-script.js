import { StatsCard, ChartCard } from "@/components/index";
import Dashboard from "../services/dashboard-request.js";
import Chartist from "chartist";
export default {
  components: {
    StatsCard,
    ChartCard,
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      statsCards: [
        {
          type: "info",
          icon: "ti-bar-chart",
          title: "Services",
          value: 0,
        },
        {
          type: "success",
          icon: "ti-wallet",
          title: "xof",
          value: "2000",
        },
        {
          type: "danger",
          icon: "ti-shopping-cart",
          title: "Reservations",
          value: 0,
        },
        {
          type: "warning",
          icon: "ti-thumb-up",
          title: "Avis Positifs",
          value: "+45",
        },
      ],
    };
  },
  methods: {
    reservationInfo() {
      Dashboard.booking(sessionStorage.getItem("partnerId")).then(
        (response) => {
          var numberOfBookings = 0;
          for (var x in response.data.tourBookings) {
            numberOfBookings += response.data.tourBookings[x].length;
          }
          for (var x in response.data.hotelBookings) {
            numberOfBookings += response.data.hotelBookings[x].length;
          }
          for (var x in response.data.restoBookings) {
            numberOfBookings += response.data.restoBookings[x].length;
          }

          this.statsCards[2].value = numberOfBookings;
        }
      );
    },
    serviceInfo() {
      Dashboard.service(sessionStorage.getItem("partnerId")).then(
        (response) => {
          // var numberOfServices =
          //   response.data.hotels.length +
          //   response.data.restos.length +
          //   response.data.tours.length +
          //   response.data.cars.length;
          this.statsCards[0].value = response.data;
        }
      );
    },
    // register() {
    //   // Dashboard.register({
    //   //   name: "First Partner",
    //   //   email: "first@partner.com",
    //   //   password: "firstpartner",
    //   // }).then((response) => {
    //   //   console.log(response.data);
    //   // });
    //   // Dashboard.register({
    //   //   name: "Second Partner",
    //   //   email: "second@partner.com",
    //   //   password: "secondpartner",
    //   // }).then((response) => {
    //   //   console.log(response.data);
    //   // });
    //   // Dashboard.register({
    //   //   name: "Third Partner",
    //   //   email: "third@partner.com",
    //   //   password: "thirdpartner",
    //   // }).then((response) => {
    //   //   console.log(response.data);
    //   // });
    // },
  },
  mounted() {
    // this.register();
    sessionStorage.setItem("partnerId", 1);
    this.reservationInfo();
    this.serviceInfo();
  },
};
