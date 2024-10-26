import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'
// import './css/toastcustom.scss'
import router from './router/index.js';  // auto loads index.js from 'router' dir


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router);
app.use(Toast, {
    position: "top-center",
});

app.mount('#app')