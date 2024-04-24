import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './Pages/AppHome.vue';
//import NotFound from './Pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome,
            },
            /*
            {
                path: '/',
                name: '',
                component: SingleRestaurant,
            },
            {
                path: '/:patchMatch(.*)*',
                name: 'not-found',
                component: NotFound,
            },
            */
    ]
})

export { router };