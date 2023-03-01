import { StatsCard, ChartCard } from "@/components/index";
import Dashboard from "../services/dashboard-request.js";
import Chartist from "chartist";
import { VueCookieNext } from "vue-cookie";
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
      if (
        sessionStorage.getItem("partnerId") == "" ||
        sessionStorage.getItem("partnerId") == null
      ) {
        this.$router.push;
      }
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
    deleteAllCookies() {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    },
  },
  mounted() {
    // sessionStorage.clear();
    // this.deleteAllCookies();

    if (
      (sessionStorage.getItem("partnerId") !== "") &
      (sessionStorage.getItem("partnerId") !== null)
    ) {
      this.reservationInfo();
      this.serviceInfo();
      this.deleteAllCookies();
    } else {
      sessionStorage.setItem("partnerId", document.cookie.substring(20));
      this.reservationInfo();
      this.serviceInfo();
      this.deleteAllCookies();
      if (
        (sessionStorage.getItem("partnerId") !== "") &
        (sessionStorage.getItem("partnerId") !== null)
      ) {
        sessionStorage.setItem("userId", document.cookie.trim().substring(17));
        this.deleteAllCookies();
      }
    }
  },
};
