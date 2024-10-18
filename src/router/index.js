import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import YourAssetsView from "@/views/YourAssetsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import OneAssetView from "@/views/OneAssetView.vue";
import AddAssetView from "@/views/AddAssetView.vue";

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
            path: '/assets',
            name: 'assets',
            component: YourAssetsView
        },
        {
            path: '/asset/:type/:id',
            name: 'asset-id',
            component: OneAssetView,
        },
        {
            path: '/asset/add',
            name: 'asset-add',
            component: AddAssetView,
            children: [
                {
                    path: '',
                    component: AddAssetView
                },
                {
                    path: ':type',
                    component: AddAssetView
                }
            ]
        },
        // {
        //     path: '/asset/add/:type',
        //     name: 'asset-add',
        //     component: AddAssetView,
        // },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        }
    ],
});

export default router;