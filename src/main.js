// jshint esversion:6

import {
  createApp
} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css' // theme
import 'primevue/resources/primevue.min.css' // core css
import 'primeicons/primeicons.css' // icons
createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .mount('#app')
