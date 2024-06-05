// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa-svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add FontAwesome icons to the library
library.add(fas);
library.add(far);

// Create the Vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});

// Create the Vue app instance
const app = createApp(App);

// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use Vuetify and Router in the app
app.use(vuetify);
app.use(router);

// Mount the app
app.mount('#app');
