import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './routes';
import '../css/app.css'
import { createPinia } from 'pinia';
import { useRouteLoadingStore } from './Store/routeLoading';

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

const { startLoading, stopLoading } = useRouteLoadingStore()

router.beforeEach(async (to, from) => {
    startLoading()
    // await new Promise(r => setTimeout(r, 1000)) // delay testing
})

router.afterEach((to, from) => {
    stopLoading()
})
