import { ref, onMounted } from "vue";
import Auth from "../services/auth.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    register() {
      Auth.register({
        email: this.email,
        name: this.name,
        password: this.password,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          sessionStorage.setItem("isLogged", true);
          // sessionStorage.setItem("customerId", response.data);
        }
      });
    },
  },
};
