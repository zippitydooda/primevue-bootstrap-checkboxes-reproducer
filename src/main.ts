import Vue, { createApp } from '@vue/compat';
import './style.css';
import App from './App.vue';
import "primevue/resources/themes/saga-blue/theme.css";
import PrimeVue from 'primevue/config';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
