import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../views/HelloWorld.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/helloworld',
    component: HelloWorld,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
