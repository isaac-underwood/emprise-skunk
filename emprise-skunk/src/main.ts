import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import urql from "@urql/vue";

const apiUrl = "https://api.github.com/graphql";

const app = createApp(App);
app.use(router);
app.use(urql, {
    url: apiUrl,
});

app.mount("#app");
