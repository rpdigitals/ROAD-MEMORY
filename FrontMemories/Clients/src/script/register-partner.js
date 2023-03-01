import { ref, onMounted } from "vue";
import Auth from "../services/auth.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      registerStatus: 2,
    };
  },
  methods: {
    register() {
      this.registerStatus = 4;
      Auth.register({
        email: this.email,
        password: this.password,
      }).then((response) => {
        console.log(response.data);
        if (response.data.success == true) {
          document.cookie =
            "userIdRoadMemory=" + response.data.user_id + ";path=/";
          this.registerStatus = 1;
          window.location.href = "http://localhost:8080/#/partner-inscription";
        } else {
          if (this.registerStatus == 2) {
            this.registerStatus = 0;
          }
        }
      });
      if (this.registerStatus == 2) {
        this.registerStatus = 0;
      }
    },
  },
};
