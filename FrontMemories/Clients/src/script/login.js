import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Auth from "../services/auth.js";
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
          if (response.status === 200) {
            sessionStorage.setItem("isLogged", true);
            sessionStorage.setItem("customerId", response.data);
            this.loggingFailed == false;
            this.$router.push("/");
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
