import { createApp } from 'vue'
import './assets/sass/app.scss'
import App from './App.vue'
import { router } from './router.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
createApp(App).use(router).mount('#app')
