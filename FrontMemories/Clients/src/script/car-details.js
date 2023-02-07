import Help from "../components/Help.vue";
import Car from "../services/car/car-request.js";

export default {
  components: { Help },
  data() {
    return {
      car: "",
      partner: "",
    };
  },
  methods: {
    carDetails() {
      Car.carDetails(this.$route.params.id).then((response) => {
        this.car = response.data["data"][0];
        this.partner = response.data["data"][0].partner;
      });
    },
  },
  mounted() {
    this.carDetails();
  },
};
