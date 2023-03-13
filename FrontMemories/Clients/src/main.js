import { createApp } from "vue";
import { createPinia } from "pinia";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import http from "./http-common.js";
import App from "./App.vue";
import router from "./router";
import Vue3Geolocation from "vue3-geolocation";

// import VueModal from "@kouts/vue-modal";
// import "@kouts/vue-modal/dist/vue-modal.css";

//Vue.component("Modal", VueModal);

const app = createApp(App);
app.use(VueSweetalert2);
app.use(createPinia());
app.use(router);
app.use(Vue3Geolocation);
app.mount("#app");
