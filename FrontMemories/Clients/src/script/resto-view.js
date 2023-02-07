import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Resto from "../services/resto/resto-request.js";

export default {
  data() {
    return {
      restoCategories: "",
      restoList: "",
      keyword: "",
      responseLength: 1,
      sortOrder: "",
    };
  },
  methods: {
    restoCategory() {
      Resto.restoCategory().then((response) => {
        this.restoCategories = response.data;
      });
    },
    getRestoList() {
      Resto.restoList().then((response) => {
        this.restoList = response.data["data"];
        this.responseLength = this.restoList.length;
      });
    },
    searchByKeyword() {
      Resto.searchByKeyword(this.keyword).then((response) => {
        this.restoList = response.data["data"];
        this.responseLength = this.restoList.length;
      });
    },
    restoOfCategory(id) {
      Resto.restoOfCategory(id).then((response) => {
        this.restoList = response.data["data"];
      });
    },
    goToRestoDetails(restoId) {
      this.$router.push(`/resto-detail/${restoId}`);
    },
    sortRestoByPrice() {
      Resto.sortRestoByPrice(this.sortOrder).then((response) => {
        console.log(response.data["data"]);
        this.restoList = response.data["data"];
      });
    },
  },
  mounted() {
    this.restoCategory();
    this.getRestoList();
  },
};
