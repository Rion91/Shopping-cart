import Vue from 'vue'
import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import Cart from '../pages/Cart.vue'
import Products from '../pages/Products.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    }
]

const router = new VueRouter(
    {
        mode: 'history',
        base:process.env.BASE_URL,
        routes,
    }
)

export default router
