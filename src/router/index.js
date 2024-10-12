import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import YourAssetsView from "@/views/YourAssetsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AssetView from "@/views/AssetView.vue";

const router = createRouter({
    // we can use back button with history
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/asset',
            name: 'asset',
            component: YourAssetsView
        },
        {
            path: '/asset/:id',
            name: 'asset-id',
            component: AssetView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        }
    ],
});

export default router;