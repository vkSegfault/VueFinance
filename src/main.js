import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router/index.js';  // auto loads index.js from 'router' dir


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')