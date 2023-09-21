import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Blog from '../components/Blog.vue'
import Contact from '../components/Contact.vue'
import About from '../components/About.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/product/:id',
        component: ProductDetails,
        name: 'ProductProfile',

    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/Blog',
        component: Blog,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router