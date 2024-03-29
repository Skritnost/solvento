import { createApp } from 'vue';
import App from './App.vue';
import router from './app.routes';
import store from './trips/store';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');