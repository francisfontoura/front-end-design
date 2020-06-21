import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faFlickr,
  faTwitter,
  faWordpress,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faComment,
  faHeadset,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

library.add(faFacebook);
library.add(faFlickr);
library.add(faTwitter);
library.add(faWordpress);
library.add(faYoutube);
library.add(faComment);
library.add(faHeadset);
library.add(faSitemap);

Vue.component("fa", FontAwesomeIcon);

Vue.use(BootstrapVue);

new Vue(App).$mount("#app");
