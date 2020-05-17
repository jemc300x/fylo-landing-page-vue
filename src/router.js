import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home.vue'
import TestPage from '@/pages/TestPage.vue'
import NotFound from '@/pages/NotFound.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {path: '/', component: Home},
    {path: '/features', component: TestPage},
    {path: '/singin', component: TestPage},
    {path: '/about', component: TestPage},
    {path: '*', component: NotFound},
  ],
  mode: 'history'
})
