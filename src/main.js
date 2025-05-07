import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Swal from "sweetalert2";

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap";
import "./assets/styles/custom.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const app = createApp(App);

// Use plugins
app.use(router);
app.use(store);
app.use(VueAxios, axios);

// Configure axios defaults
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common["Content-Type"] = "application/json";

// Configure SweetAlert2 defaults
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

// Make SweetAlert2 available globally
window.Swal = Swal;
window.Toast = Toast;

// Make axios available globally
app.config.globalProperties.$axios = axios;

app.mount("#app");
