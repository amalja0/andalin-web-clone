import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Homes.vue"
import Register from "../views/Registers.vue"

const routes = [
    {path: '/', component: Home},
    {path: '/register', component: Register}
]

const router = createRouter({history: createWebHistory(), routes})

export default router;