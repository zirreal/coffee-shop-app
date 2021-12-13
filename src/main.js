import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/global.scss';
import './assets/scss/media.scss';

createApp(App).use(router).mount('#app')
