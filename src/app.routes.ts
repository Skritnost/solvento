import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { tripsModule } from './trips';
import NotFound from './components/NotFound.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/trips'
    },
    {
        path: '/trips',
        children: tripsModule.routes(),
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
        meta: {
            requiresAuth: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;