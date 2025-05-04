import { createApp } from "vue";
import App from "./App.vue";
import GlobalComp from "./GlobalComp.vue";
import { vAutoCol } from "./directives/vAutoCol";
 
let app = createApp(App);
app.component("GlobalComp", GlobalComp);
app.directive("col", vAutoCol);
app.mount("#app");