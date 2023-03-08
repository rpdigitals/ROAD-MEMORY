import { ref, onMounted } from "vue";
import Auth from "../services/auth.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      telephone: "",
      registerStatus: 2,
    };
  },
  methods: {
    register() {
      this.registerStatus = 4;
      Auth.register({
        email: this.email,
        name: this.name,
        password: this.password,
        telephone: this.telephone,
      }).then((response) => {
        console.log(response);

        //  this.successRequest == 1;
        console.log(response);
        if (response.data.success == true) {
          sessionStorage.setItem("isLogged", 1);
          sessionStorage.setItem("customerId", response.data.customer_id);
          this.registerStatus = 1;
          window.location.href = "http://localhost:3000";
        } else {
          //Error message for telephone
          this.registerStatus = 3;
        }
      });

      if (this.registerStatus == 2) {
        //Error message email is already registered
        this.registerStatus = 0;
      }
      console.log(this.registerStatus);
    },

    signIn() {
      console.log("registerStatus");
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then((user) => {
          console.log(user.getBasicProfile());
          // Do something with the user data, e.g. send it to your server for authentication
        });
    },
  },
  mounted() {
    gapi.load("auth2", () => {
      gapi.auth2.init({
        client_id:
          "1046619801838-3hg56gdduqqhg1u2iqnfj1oapqg5ulf0.apps.googleusercontent.com",
      });
    });
  },
};
