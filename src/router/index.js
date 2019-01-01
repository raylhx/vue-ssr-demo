import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const list = () => import('../views/list.vue')
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/:id',
        component: list,
        name: 'list'
      },{
        path: '/',
        redirect: '/index'
      }
    ]
  })
}
