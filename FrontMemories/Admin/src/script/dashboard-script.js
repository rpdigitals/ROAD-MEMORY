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
          icon: "fa fa-building",
          title: "Sites",
          value: "0",
        },
        {
          type: "success",
          icon: "fa fa-hotel",
          title: "Hotels",
          value: "0",
        },
        {
          type: "danger",
          icon: "fa fa-cutlery",
          title: "Restaurants",
          value: "0",
        },
        {
          type: "warning",
          icon: "fa fa-car",
          title: "Voitures",
          value: "0",
        },
        {
          type: "info",
          icon: "fa fa-user",
          title: "Partenaires",
          value: "0",
        },
        {
          type: "success",
          icon: "fa fa-user",
          title: "Utilisateurs",
          value: "0",
        },
        {
          type: "danger",
          icon: "ti-view-grid",
          title: "Reservations",
          value: "0",
        },
        {
          type: "warning",
          icon: "fa fa-truck",
          title: "Randonné",
          value: "0",
        },
      ],
    };
  },
  methods: {
    allTour() {
      Dashboard.allTour().then((response) => {
        this.statsCards[0].value = response.data["data"].length;
      });
    },
    allHotels() {
      Dashboard.allHotels().then((response) => {
        this.statsCards[1].value = response.data["data"].length;
      });
    },
    allResto() {
      Dashboard.allResto().then((response) => {
        this.statsCards[2].value = response.data["data"].length;
      });
    },
    allCar() {
      Dashboard.allCar().then((response) => {
        this.statsCards[3].value = response.data["data"].length;
      });
    },
    allPartners() {
      Dashboard.allPartners().then((response) => {
        this.statsCards[4].value = response.data.length;
      });
    },
    allCustomers() {
      Dashboard.allCustomers().then((response) => {
        this.statsCards[5].value = response.data.length;
      });
    },
  },
  mounted() {
    this.allPartners();
    this.allCustomers();
    this.allCar();
    this.allResto();
    this.allTour();
    this.allHotels();
  },
};
