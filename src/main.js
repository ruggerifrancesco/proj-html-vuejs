import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from './icons.js'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
