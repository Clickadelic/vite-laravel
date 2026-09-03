import { createApp } from "vue";

// Let's remove it - maybe
import "./assets/css/utility-classes.css";

import "./assets/css/google-fonts.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
