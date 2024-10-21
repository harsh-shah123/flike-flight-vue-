// import { compile } from "vue";
import HomeId from "./components/Home.vue";
import Result from "./components/Result.vue";

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
   
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router