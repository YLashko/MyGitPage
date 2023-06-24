import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
    { path: '/', component: MainPage, name: "home" },
    { path: '/helloworld', component: HelloWorld, name: "hello_world" }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
