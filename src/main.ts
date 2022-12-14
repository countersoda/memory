import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import App from "./App.vue";
import "./global.css";
import "vue-toastification/dist/index.css";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Toast);
app.mount("#app");
