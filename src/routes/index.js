import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import MainRedirect from '../components/MainRedirect.vue';
import Project from '../components/Project.vue';
import Blog from '../components/Blog.vue';

const routes = [
    { path: '/', component: MainRedirect, name: 'home-empty' },
    { path: '/:category', component: MainPage, name: 'home' },
    { path: '/projects/:name', component: Project },
    { path: '/blogs/:name', component: Blog }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
