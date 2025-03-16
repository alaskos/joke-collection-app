import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the Vue Router
import "./assets/main.css"; // Import global styles (Tailwind CSS)

const app = createApp(App);

app.use(router); // Register the router

app.mount("#app"); // Mount the app to the root div in index.html