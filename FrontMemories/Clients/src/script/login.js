import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Auth from "../services/auth.js";
import { VueCookieNext } from "vue-cookie";
export default {
  data() {
    return {
      email: "",
      password: "",
      loggingFailed: "",
    };
  },
  methods: {
    login() {
      Auth.login({
        email: this.email,
        password: this.password,
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            if (response.data.customer_id) {
              sessionStorage.setItem("isLogged", 1);
              sessionStorage.setItem("customerId", response.data.customer_id);
              console.log(sessionStorage.getItem("customerId"));
              this.loggingFailed == false;
              window.location.href = "http://localhost:3000";
            }
            if (response.data.partner_id) {
              document.cookie =
                "partnerIdRoadMemory=" + response.data.partner_id + ";path=/";
              window.location.href = "http://localhost:8080";
            }
            if (response.data.user_id) {
              document.cookie =
                "userIdRoadMemory=" + response.data.user_id + ";path=/";
              this.registerStatus = 1;
              window.location.href =
                "http://localhost:8080/#/partner-inscription";
            }
          } else {
            this.loggingFailed = true;
          }
        })
        .catch((error) => {
          console.error(error);
          this.loggingFailed = true;
        });
    },
  },
  mounted() {
    // console.log(sessionStorage.getItem("isLogged"));
  },
};
