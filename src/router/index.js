import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Introduction from '../views/Introduction.vue'
import Project from '../views/Project.vue'
import News from '../views/News.vue'
import NewsDetails from '../views/NewsDetails.vue'
import Result from '../views/Result.vue'

const routes = [{
    path: '/',
    redirect: '/Introduction',
    component: Home,
    children: [
        { path: 'Introduction', name: 'Introduction', component: Introduction },
        { path: 'Project', name: 'Project', component: Project },
        { path: 'News', name: 'News', component: News },
        { path: 'News/:id', name: 'NewsDetails', component: NewsDetails },
        { path: 'Result', name: 'Result', component: Result },
    ],
}, ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router