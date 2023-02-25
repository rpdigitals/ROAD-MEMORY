import { createApp } from "vue";
import { createPinia } from "pinia";
import http from "./http-common.js";
import App from "./App.vue";
import router from "./router";
// import VueModal from "@kouts/vue-modal";
// import "@kouts/vue-modal/dist/vue-modal.css";

//Vue.component("Modal", VueModal);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
