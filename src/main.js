import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhone,
  faCheck,
  faBook,
  faWifi,
  faBell,
  faComment,
  faUser,
  faDashboard,
  faGauge,
  faPenToSquare,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faPhone,
  faCheck,
  faBook,
  faWifi,
  faBell,
  faComment,
  faUser,
  faDashboard,
  faGauge,
  faPenToSquare,
  faInbox
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
