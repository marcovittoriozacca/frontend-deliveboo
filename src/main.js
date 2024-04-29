import { createApp } from 'vue'
import './assets/sass/app.scss'
import App from './App.vue'
import { router } from './router.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import 'vue3-carousel/dist/carousel.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa i file CSS di AOS

createApp(App).use(router).mount('#app')


AOS.init({
    // Opzioni di configurazione di AOS
    offset: 100, // Sposta l'animazione di 100px prima che l'elemento entri nel viewport
    duration: 800, // Durata dell'animazione in millisecondi
    easing: 'ease-in-out', // Tipo di easing da utilizzare
    once: true // Esegui l'animazione solo la prima volta che l'elemento entra nel viewport
});