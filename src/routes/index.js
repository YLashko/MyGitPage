import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import Project from '../components/Project.vue';

const routes = [
    { path: '/', component: MainPage, name: "home" },
    { path: "/projects/:name", component: Project }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
