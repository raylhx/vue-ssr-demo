import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = () => import('../views/test.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { 
        path: '/test', 
        component: test,
        name: 'test'
      },
    ]
  })
}
