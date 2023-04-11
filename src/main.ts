import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faTrash);

createApp(App).use(createPinia()).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
