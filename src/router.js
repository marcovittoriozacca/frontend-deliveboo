import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './Pages/AppHome.vue'
import NotFound from './Pages/NotFound.vue'
import SingleRestaurant from './Pages/SingleRestaurant.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
         {
             path: '/',
             name: 'home',
             component: AppHome,
         },
         {
             path: '/plate/:slug',
             name: 'Single-Restaurant',
             component: SingleRestaurant,
         },
         {
             path: '/:patchMatch(.*)*',
             name: 'not-found',
             component: NotFound,
         },
    ]
})

export { router };