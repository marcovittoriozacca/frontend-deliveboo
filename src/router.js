import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: AppHome,
        // },
        // {
        //     path: '/:patchMatch(.*)*',
        //     name: 'not-found',
        //     component: NotFound,
        // },
    ]
})

export { router };