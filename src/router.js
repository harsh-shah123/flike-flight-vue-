// import { compile } from "vue";
import HomeId from "./components/Home.vue";
import Result from "./components/Result.vue";
import Profile from "./components/Profile.vue"

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name : 'HomeId',
        component : HomeId,
        path : '/'
    },
    {
        name : 'Result',
        component : Result,
        path : '/Result'
    },
    {
        name : 'Profile',
        component : Profile,
        path : '/profile'
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router