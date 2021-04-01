import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Discussion from '../views/Discussion.vue'

Vue.use(VueRouter)

const routes = [{

        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/discussion',
        name: 'Discussion',
        component: Discussion
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router