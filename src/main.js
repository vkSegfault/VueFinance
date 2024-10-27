import './assets/main.css';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Toast from 'vue-toastification';
// import 'vue-toastification/dist/index.css'
import './css/toastcustom.scss'
import router from './router/index.js';  // auto loads index.js from 'router' dir
// import 'primevue/resources/themes/aura-light-green/theme.css'   // there are other pre-defined Prime themes to choose from (https://v3.primevue.org/theming/#themes)
import Aura from '@primevue/themes/aura'


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router);
app.use(Toast, {
    position: "top-center",
});
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

app.mount('#app')